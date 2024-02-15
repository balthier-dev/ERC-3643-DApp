// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IERC20 {
    function transfer(address, uint) external returns (bool);

    function transferFrom(address, address, uint) external returns (bool);
}

contract FundingVaults {
    event Launch(
        uint id,
        address indexed creator,
        uint goal,
        uint32 startAt,
        uint32 endAt
    );
    event Cancel(uint id);
    event Pledge(uint indexed id, address indexed caller, uint amount);
    event Unpledge(uint indexed id, address indexed caller, uint amount);
    event Claim(uint id);
    event Refund(uint id, address indexed caller, uint amount);

    struct Campaign {
        // Creator of campaign
        address creator;
        // Amount of tokens to raise
        uint goal;
        // Max tokens to raise
        uint max;
        // Total amount pledged
        uint pledged;
        // Timestamp of start of campaign
        uint32 startAt;
        // Timestamp of end of campaign
        uint32 endAt;
        //token for investor
        address receiptToken;
        // True if goal was reached and creator has claimed the tokens.
        bool claimed;
    }

    struct Investing {
        address investor;
        uint256 amount;
    }

    IERC20 public immutable token;
    // Total count of campaigns created.
    // It is also used to generate id for new campaigns.
    uint public count;
    // Mapping from id to Campaign
    address public _identityRegistry;
    mapping(uint => Campaign) public campaigns;
    // Mapping from campaign id => pledger => amount pledged
    mapping(uint => mapping(address => uint)) public pledgedAmount;
    mapping(uint => Investing[]) public investorInfo;

    constructor() {
        token = IERC20(0x0d81dFC1861AAb6a0124d28c0E8d2673051d470f);
        _identityRegistry = 0xeD14018AEb46Fa52af49708AC83948F5785408C7;
    }

    function setIdentityRegistry(address _newIdentityRegistry) external {
        _identityRegistry = _newIdentityRegistry;
    }

    function checkInvestorList(uint _id) public view returns (Investing[] memory) {
        return investorInfo[_id];
    }

    // function checkInvestAmount(uint _id, address _investor) public view returns (uint) {
    //     return pledgedAmount[_id][_investor];
    // }

    function launch(uint _goal,uint _max, uint32 _startAt, uint32 _endAt, address _receiptToken) external {
        require(_startAt >= block.timestamp, "start at < now");
        require(_endAt >= _startAt, "end at < start at");
        require(_endAt <= block.timestamp + 90 days, "end at > max duration");

        count += 1;
        campaigns[count] = Campaign({
            creator: msg.sender,
            goal: _goal,
            max: _max,
            pledged: 0,
            startAt: _startAt,
            endAt: _endAt,
            receiptToken: _receiptToken,
            claimed: false
        });

        IERC20(_receiptToken).transferFrom(msg.sender, address(this), _max);

        emit Launch(count, msg.sender, _goal, _startAt, _endAt);
    }

    function cancel(uint _id) external {
        Campaign memory campaign = campaigns[_id];
        require(campaign.creator == msg.sender, "not creator");
        require(block.timestamp < campaign.startAt, "started");

        delete campaigns[_id];
        emit Cancel(_id);
    }

    function pledge(uint _id, uint _amount) external {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp >= campaign.startAt, "not started");
        require(block.timestamp <= campaign.endAt, "ended");

        require((campaign.pledged + _amount) <= campaign.max, "Maximum Amount");
        campaign.pledged += _amount;
        pledgedAmount[_id][msg.sender] += _amount;
        Investing memory investor;
        investor.investor = msg.sender;
        investor.amount = _amount;
        investorInfo[_id].push(investor);
        // addressList[_id].push(msg.sender);
        token.transferFrom(msg.sender, address(this), _amount);

        emit Pledge(_id, msg.sender, _amount);
    }

    function unpledge(uint _id, uint _amount) external {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp <= campaign.endAt, "ended");

        campaign.pledged -= _amount;
        pledgedAmount[_id][msg.sender] -= _amount;
        token.transfer(msg.sender, _amount);

        emit Unpledge(_id, msg.sender, _amount);
    }

    function claim(uint _id) external {
        Campaign storage campaign = campaigns[_id];
        require(campaign.creator == msg.sender, "not creator");
        require(block.timestamp > campaign.endAt, "not ended");
        require(campaign.pledged >= campaign.goal, "pledged < goal");
        require(!campaign.claimed, "claimed");

        if(campaign.max > campaign.pledged) {
            uint256 amountBack = campaign.max - campaign.pledged;
            IERC20(campaign.receiptToken).transfer(msg.sender, amountBack);
        }

        for(uint i=0; i < investorInfo[_id].length; i++){
            //transfer token as a receipt to investor
            IERC20(campaign.receiptToken).transfer(investorInfo[_id][i].investor, investorInfo[_id][i].amount);
        }

        campaign.claimed = true;
        token.transfer(campaign.creator, campaign.pledged);

        emit Claim(_id);
    }

    function refund(uint _id) external {
        Campaign memory campaign = campaigns[_id];
        require(block.timestamp > campaign.endAt, "not ended");
        require(campaign.pledged < campaign.goal, "pledged >= goal");

        uint bal = pledgedAmount[_id][msg.sender];
        pledgedAmount[_id][msg.sender] = 0;
        token.transfer(msg.sender, bal);

        emit Refund(_id, msg.sender, bal);
    }

}
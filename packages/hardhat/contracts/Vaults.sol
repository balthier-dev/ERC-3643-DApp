// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;

// Sources flattened with hardhat v2.14.0 https://hardhat.org
import "./IERC20.sol";

contract Vaults {

    uint256 public _paybackPercent;
    address public _tokenAsset;
    address public _tokenStakeholder;
    address public _identityRegistry;
    uint256 public _recentShare;
    uint256 public _stakeHolderSupply;
    uint256 public _transferBalance;
    uint256 public _stakeHolderBalance;
    uint256 public _percent;
    uint256 public _percentStakeHolder;
    uint256 public _remainingDebt;

    constructor() {
        _tokenAsset = 0x0d81dFC1861AAb6a0124d28c0E8d2673051d470f;
        _tokenStakeholder = 0xd9E0F4fAAA6d12c8a3D0e9B1DB137A185f38C975;
        _paybackPercent = 20 * 10**18;
        _identityRegistry = 0xeD14018AEb46Fa52af49708AC83948F5785408C7;
    }

    function setPaybackPercent(uint256 _newShare) external {
        _paybackPercent = _newShare;
    }

    function setAsset(address _newAsset) external {
        _tokenAsset = _newAsset;
    }

    function setDebt(uint256 _debt) external {
        _remainingDebt = _debt;
    }

    function setTokenStakeHolder(address _newTokenStakeHolder) external {
        _tokenStakeholder = _newTokenStakeHolder;
    }

    function setIdentityRegistry(address _newIdentityRegistry) external {
        _identityRegistry = _newIdentityRegistry;
    }

    function depositRevenue(uint256 amount, address[] calldata holders) external {
        require(IERC20(_tokenAsset).balanceOf(msg.sender) >= amount, "FUCK U DONT HAVE MONEY");
        uint256 stakeholderSupply = IERC20(_tokenStakeholder).totalSupply();
        _stakeHolderSupply = stakeholderSupply;
        uint256 percentSharing = _paybackPercent / 100;
        _percent = percentSharing;
        uint256 revenueToShare = (amount * percentSharing) / 1 ether;
        // uint256 revenueBack = amount - revenueToShare;
        // IERC20(_tokenAsset).transferFrom(msg.sender, address(this), revenueToShare);
        // uint256 stakeholderSupply = IERC20(_tokenStakeholder).totalSupply();
        uint256 holdBalance = 0;
        uint256 transferBalance = 0;
        uint256 percentHolder = 0;
        _remainingDebt = _remainingDebt - amount;
        _recentShare = revenueToShare;
        for (uint256 i = 0; i < holders.length; i++) {
            holdBalance = IERC20(_tokenStakeholder).balanceOf(holders[i]);
            // 10
            percentHolder = holdBalance/ 100;
            _percentStakeHolder = percentHolder;
            transferBalance = (revenueToShare * percentHolder) / 1 ether;

            _transferBalance = transferBalance;
            _stakeHolderBalance = holdBalance;

            IERC20(_tokenAsset).transferFrom(msg.sender, holders[i], transferBalance);
        }
    }

}
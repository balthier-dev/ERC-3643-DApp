const contracts = {
  80001: [
    {
      chainId: "80001",
      name: "polygonMumbai",
      contracts: {
        ClaimTopicsRegistry: {
          address: "0x321BB1C8f95105AEe1E879b4414311f4f5C7Df54",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "claimTopic",
                  type: "uint256",
                },
              ],
              name: "ClaimTopicAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "claimTopic",
                  type: "uint256",
                },
              ],
              name: "ClaimTopicRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_claimTopic",
                  type: "uint256",
                },
              ],
              name: "addClaimTopic",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getClaimTopics",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_claimTopic",
                  type: "uint256",
                },
              ],
              name: "removeClaimTopic",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        FundingVaults: {
          address: "0x6EF00a931575F3eF8792dcD3fF5D35931B67eAF1",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "Cancel",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
              ],
              name: "Claim",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "goal",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "startAt",
                  type: "uint32",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "endAt",
                  type: "uint32",
                },
              ],
              name: "Launch",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Pledge",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Refund",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Unpledge",
              type: "event",
            },
            {
              inputs: [],
              name: "_identityRegistry",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "campaigns",
              outputs: [
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "goal",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "max",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pledged",
                  type: "uint256",
                },
                {
                  internalType: "uint32",
                  name: "startAt",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "endAt",
                  type: "uint32",
                },
                {
                  internalType: "address",
                  name: "receiptToken",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "claimed",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "cancel",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "checkInvestorList",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "investor",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct FundingVaults.Investing[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "claim",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "count",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "investorInfo",
              outputs: [
                {
                  internalType: "address",
                  name: "investor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_goal",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_max",
                  type: "uint256",
                },
                {
                  internalType: "uint32",
                  name: "_startAt",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "_endAt",
                  type: "uint32",
                },
                {
                  internalType: "address",
                  name: "_receiptToken",
                  type: "address",
                },
              ],
              name: "launch",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "pledge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "pledgedAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
              ],
              name: "refund",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newIdentityRegistry",
                  type: "address",
                },
              ],
              name: "setIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "token",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "unpledge",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        IdentityRegistry: {
          address: "0xeD14018AEb46Fa52af49708AC83948F5785408C7",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimTopicsRegistry",
                  type: "address",
                },
              ],
              name: "ClaimTopicsRegistrySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint16",
                  name: "country",
                  type: "uint16",
                },
              ],
              name: "CountryUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityRegistered",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "identityStorage",
                  type: "address",
                },
              ],
              name: "IdentityStorageSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "oldIdentity",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "newIdentity",
                  type: "address",
                },
              ],
              name: "IdentityUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "trustedIssuersRegistry",
                  type: "address",
                },
              ],
              name: "TrustedIssuersRegistrySet",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "addAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "contract IIdentity[]",
                  name: "_identities",
                  type: "address[]",
                },
                {
                  internalType: "uint16[]",
                  name: "_countries",
                  type: "uint16[]",
                },
              ],
              name: "batchRegisterIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "contains",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "deleteIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "identity",
              outputs: [
                {
                  internalType: "contract IIdentity",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "identityStorage",
              outputs: [
                {
                  internalType: "contract IIdentityRegistryStorage",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_trustedIssuersRegistry",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_claimTopicsRegistry",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_identityStorage",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "investorCountry",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "isAgent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "isVerified",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "issuersRegistry",
              outputs: [
                {
                  internalType: "contract ITrustedIssuersRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "registerIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "removeAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimTopicsRegistry",
                  type: "address",
                },
              ],
              name: "setClaimTopicsRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistryStorage",
                  type: "address",
                },
              ],
              name: "setIdentityRegistryStorage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_trustedIssuersRegistry",
                  type: "address",
                },
              ],
              name: "setTrustedIssuersRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "topicsRegistry",
              outputs: [
                {
                  internalType: "contract IClaimTopicsRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "updateCountry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
              ],
              name: "updateIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        IdentityRegistryStorage: {
          address: "0xD2B433D4E2912870C1216fd8189141795cc9b96D",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint16",
                  name: "country",
                  type: "uint16",
                },
              ],
              name: "CountryModified",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "oldIdentity",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "newIdentity",
                  type: "address",
                },
              ],
              name: "IdentityModified",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "identityRegistry",
                  type: "address",
                },
              ],
              name: "IdentityRegistryBound",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "identityRegistry",
                  type: "address",
                },
              ],
              name: "IdentityRegistryUnbound",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityStored",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityUnstored",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "addAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "addIdentityToStorage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "bindIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "isAgent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "linkedIdentityRegistries",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
              ],
              name: "modifyStoredIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "modifyStoredInvestorCountry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "removeAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "removeIdentityFromStorage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "storedIdentity",
              outputs: [
                {
                  internalType: "contract IIdentity",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "storedInvestorCountry",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "unbindIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        ModularCompliance: {
          address: "0x5CD38718618F5fEe11dDf3B9F3e38381Ed226c0a",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "ModuleAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
              ],
              name: "ModuleInteraction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "ModuleRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "TokenBound",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "TokenUnbound",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "addModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "bindToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "callData",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "callModuleFunction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "canTransfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "created",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "destroyed",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getModules",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTokenBound",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "isModuleBound",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "removeModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "transferred",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "unbindToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        RevenueVaults: {
          address: "0xFe9535416B447e3102e6DaF4a7C225275a6fD505",
          abi: [
            {
              inputs: [],
              name: "_identityRegistry",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_tokenAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_tokenStakeholder",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "holders",
                  type: "address[]",
                },
              ],
              name: "depositRevenue",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newAsset",
                  type: "address",
                },
              ],
              name: "setAsset",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newIdentityRegistry",
                  type: "address",
                },
              ],
              name: "setIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_newShare",
                  type: "uint8",
                },
              ],
              name: "setPaybackPercent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newTokenStakeHolder",
                  type: "address",
                },
              ],
              name: "setTokenStakeHolder",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SLUSD: {
          address: "0x0d81dFC1861AAb6a0124d28c0E8d2673051d470f",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        TREXFactory: {
          address: "0x1398D99911bf30AA3b8917f1dbe778abCa6bD9a2",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_addr",
                  type: "address",
                },
              ],
              name: "Deployed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_implementationAuthority",
                  type: "address",
                },
              ],
              name: "ImplementationAuthoritySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_ir",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_irs",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_tir",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_ctr",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_mc",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "_salt",
                  type: "string",
                },
              ],
              name: "TREXSuiteDeployed",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_salt",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "uint8",
                      name: "decimals",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "irs",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "ONCHAINID",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "irAgents",
                      type: "address[]",
                    },
                    {
                      internalType: "address[]",
                      name: "tokenAgents",
                      type: "address[]",
                    },
                    {
                      internalType: "address[]",
                      name: "complianceModules",
                      type: "address[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "complianceSettings",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct ITREXFactory.TokenDetails",
                  name: "_tokenDetails",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[]",
                      name: "claimTopics",
                      type: "uint256[]",
                    },
                    {
                      internalType: "address[]",
                      name: "issuers",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[][]",
                      name: "issuerClaims",
                      type: "uint256[][]",
                    },
                  ],
                  internalType: "struct ITREXFactory.ClaimDetails",
                  name: "_claimDetails",
                  type: "tuple",
                },
              ],
              name: "deployTREXSuite",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getImplementationAuthority",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_salt",
                  type: "string",
                },
              ],
              name: "getToken",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contract",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "recoverContractOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementationAuthority_",
                  type: "address",
                },
              ],
              name: "setImplementationAuthority",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "tokenDeployed",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Token: {
          address: "0x01B5Bb8fEB5A419d81E76120495043a5B36dDfc9",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bool",
                  name: "_isFrozen",
                  type: "bool",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "AddressFrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
              ],
              name: "ComplianceAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "IdentityRegistryAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "Paused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_lostWallet",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_newWallet",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_investorOnchainID",
                  type: "address",
                },
              ],
              name: "RecoverySuccess",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "TokensFrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "TokensUnfrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "Unpaused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "_newName",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "_newSymbol",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "_newDecimals",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "_newVersion",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_newOnchainID",
                  type: "address",
                },
              ],
              name: "UpdatedTokenInformation",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "addAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchBurn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_fromList",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchForcedTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchFreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "bool[]",
                  name: "_freeze",
                  type: "bool[]",
                },
              ],
              name: "batchSetAddressFrozen",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchUnfreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "compliance",
              outputs: [
                {
                  internalType: "contract IModularCompliance",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forcedTransfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "freezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "getFrozenTokens",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "identityRegistry",
              outputs: [
                {
                  internalType: "contract IIdentityRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "_onchainID",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "isAgent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "isFrozen",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "onchainID",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paused",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_lostWallet",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newWallet",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_investorOnchainID",
                  type: "address",
                },
              ],
              name: "recoveryAddress",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "removeAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_freeze",
                  type: "bool",
                },
              ],
              name: "setAddressFrozen",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
              ],
              name: "setCompliance",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "setIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "setName",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_onchainID",
                  type: "address",
                },
              ],
              name: "setOnchainID",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "unfreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unpause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
        },
        TokenMod: {
          address: "0xd9E0F4fAAA6d12c8a3D0e9B1DB137A185f38C975",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bool",
                  name: "_isFrozen",
                  type: "bool",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "AddressFrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
              ],
              name: "ComplianceAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "IdentityRegistryAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "Paused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_lostWallet",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_newWallet",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_investorOnchainID",
                  type: "address",
                },
              ],
              name: "RecoverySuccess",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "TokensFrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "TokensUnfrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "Unpaused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "_newName",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "_newSymbol",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "_newDecimals",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "_newVersion",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_newOnchainID",
                  type: "address",
                },
              ],
              name: "UpdatedTokenInformation",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "addAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchBurn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_fromList",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchForcedTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchFreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "bool[]",
                  name: "_freeze",
                  type: "bool[]",
                },
              ],
              name: "batchSetAddressFrozen",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchUnfreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "compliance",
              outputs: [
                {
                  internalType: "contract IModularCompliance",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forcedTransfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "freezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "getFrozenTokens",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "identityRegistry",
              outputs: [
                {
                  internalType: "contract IIdentityRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "_onchainID",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "isAgent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "isFrozen",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "onchainID",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paused",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_lostWallet",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newWallet",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_investorOnchainID",
                  type: "address",
                },
              ],
              name: "recoveryAddress",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "removeAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_freeze",
                  type: "bool",
                },
              ],
              name: "setAddressFrozen",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
              ],
              name: "setCompliance",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "setIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "setName",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_onchainID",
                  type: "address",
                },
              ],
              name: "setOnchainID",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "unfreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unpause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
        },
        TrustedIssuersRegistry: {
          address: "0x15d38F19e66b73DdFe99642Ef74A497917362E62",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IClaimIssuer",
                  name: "trustedIssuer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "ClaimTopicsUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IClaimIssuer",
                  name: "trustedIssuer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "TrustedIssuerAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IClaimIssuer",
                  name: "trustedIssuer",
                  type: "address",
                },
              ],
              name: "TrustedIssuerRemoved",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "_claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "addTrustedIssuer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
              ],
              name: "getTrustedIssuerClaimTopics",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTrustedIssuers",
              outputs: [
                {
                  internalType: "contract IClaimIssuer[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "claimTopic",
                  type: "uint256",
                },
              ],
              name: "getTrustedIssuersForClaimTopic",
              outputs: [
                {
                  internalType: "contract IClaimIssuer[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_issuer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_claimTopic",
                  type: "uint256",
                },
              ],
              name: "hasClaimTopic",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_issuer",
                  type: "address",
                },
              ],
              name: "isTrustedIssuer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
              ],
              name: "removeTrustedIssuer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "_claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "updateIssuerClaimTopics",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Vaults: {
          address: "0xc6853a4777a7F8458a13ce5391741c07585B72c4",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "_identityRegistry",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_paybackPercent",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_percent",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_percentStakeHolder",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_recentShare",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_remainingDebt",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_stakeHolderBalance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_stakeHolderSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_tokenAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_tokenStakeholder",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "_transferBalance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "holders",
                  type: "address[]",
                },
              ],
              name: "depositRevenue",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newAsset",
                  type: "address",
                },
              ],
              name: "setAsset",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_debt",
                  type: "uint256",
                },
              ],
              name: "setDebt",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newIdentityRegistry",
                  type: "address",
                },
              ],
              name: "setIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_newShare",
                  type: "uint256",
                },
              ],
              name: "setPaybackPercent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newTokenStakeHolder",
                  type: "address",
                },
              ],
              name: "setTokenStakeHolder",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;

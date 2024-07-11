Found funded account 0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
Deploying RelayRegistrar contract with gas limit of 5,000,000 at 1gwei (estimated gas: 767,412) and maximum cost of ~ 0.005 ETH
Transaction broadcast: 0xcd02b1c396d2a471a81ff60d0d15e992fa14db68668bb19d5585db7415d4c133
Deployed RelayRegistrar at address 0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab

Deploying StakeManager contract with gas limit of 5,000,000 at 1gwei (estimated gas: 1,903,410) and maximum cost of ~ 0.005 ETH
Transaction broadcast: 0x28bc2719ebc560465ef498e1480f3b739c3f9a35abd2d0ccffdba2cb3ec0e9e5
Deployed StakeManager at address 0x5b1869D9A4C187F2EAa108f3062412ecf0526b24

Deploying Penalizer contract with gas limit of 5,000,000 at 1gwei (estimated gas: 1,733,753) and maximum cost of ~ 0.005 ETH
Transaction broadcast: 0xf183d76fddb7d66c4ec5a82813757c96087e766e2090706907cb4382d8c24455
Deployed Penalizer at address 0xCfEB869F69431e42cdB54A4F4f105C19C080A601

Deploying Forwarder contract with gas limit of 5,000,000 at 1gwei (estimated gas: 1,245,926) and maximum cost of ~ 0.005 ETH
Transaction broadcast: 0xb8465a97c72bc088502fb19c225f6edbbefcecad83686e3b7751d09759011147
Deployed Forwarder at address 0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B

Deploying RelayHub contract with gas limit of 5,000,000 at 1gwei (estimated gas: 4,763,308) and maximum cost of ~ 0.005 ETH
Transaction broadcast: 0xed1b448da2ecb4f924984526cdcd0c7590cfe70069f883c835a9fcfac527664b
Deployed RelayHub at address 0xC89Ce4735882C9F0f0FE26686c53074E09B0D550

Deploying TestPaymasterEverythingAccepted contract with gas limit of 5,000,000 at 1gwei (estimated gas: 1,168,903) and maximum cost of ~ 0.005 ETH
Transaction broadcast: 0x559a86e44b575dba4d71485cc6154dd109e7704a14d4e765679dbc5495fef8dc
Deployed TestPaymasterEverythingAccepted at address 0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb

Registering request type RelayRequest with suffix: RelayData relayData)RelayData(uint256 maxFeePerGas,uint256 maxPriorityFeePerGas,uint256 transactionCalldataGasUsed,address relayWorker,address paymaster,address forwarder,bytes paymasterData,uint256 clientId)
Transaction broadcast: 0x31fe18394697e36076afcfcc9f9ad1c91ac02e479b19c3d447af49af4bb85647
Registering domain separator GSN Relayed Transaction with version: 3
Transaction broadcast: 0xdd48d97c9dfc199cb8366616bd81758d5dea3e2f5fdcbc6a938e4f7cfef4cc87
Deploying WrappedEthToken contract with gas limit of 5,000,000 at 1gwei (estimated gas: 787,492) and maximum cost of ~ 0.005 ETH
Transaction broadcast: 0xcd6ecd9618e1b906af59813f6342c97ca9342b7fe349ee8f49c84936d45d7d33
Deployed WrappedEthToken at address 0x9b1f7F645351AF3631a656421eD2e40f2802E6c0

Setting minimum stake of 1 TestWeth on Hub
Setting minimum stake of 0.000000000000000001 wEth
Naive Paymaster successfully funded, balance: 1
Registering GSN relayer at http://127.0.0.1:60307
current stake= 0 wEth
Funding relayer
Waiting 100ms 0/5 for relayer to set 0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1 as owner
RelayServer successfully set its owner on the StakeManager
Staking relayer 1 wEth
Wrapping 1 wEth
Current allowance 0 wEth
Approving 1 wEth to StakeManager
Authorizing relayer for hub
Will wait up to 60s for the relay to be ready
In-process relay successfully registered: {"success":true,"transactions":["0x976e6371b9242d6754f775ce2263270ef82496a6e8ecb8af0dffdad2ea7c81f8","0xac25b792dd273218ef648120a05148eee572e3c240846d3cf97bf1401546e5a3","0xd57707bac057d92f3dc4c8f0d957ddbe3bbb5275a39e9d08d019e4882e7bfec9","0xa66ce2901f4b4335e902c64e0a6d57bc9e2bacba944ebb4dc2127d52f60017c8","0x1d58ad71ba460177d5583a38e247e372700e9803a70b0a7ecac0e7b9815adaf1"]}
Will wait up to 60s for the relay to be ready
Config response: {"version":"3.0.0-beta.1","networks":{"1":{"name":"mainnet","gsnConfig":{"tokenPaymasterDomainSeparators":{"0x6B175474E89094C44Da98b954EedeAC495271d0F":{"name":"Dai Stablecoin","version":"1","chainId":1,"verifyingContract":"0x6B175474E89094C44Da98b954EedeAC495271d0F"},"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48":{"name":"USD Coin","version":"2","chainId":1,"verifyingContract":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984":{"name":"Uniswap","chainId":1,"verifyingContract":"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"}}}},"5":{"name":"goerli","gsnConfig":{}},"69":{"name":"kovan-optimism","gsnConfig":{}},"43113":{"name":"fuji","gsnConfig":{}},"80001":{"name":"mumbai","gsnConfig":{}}}}
Created new RelayProvider ver.3.0.0-beta.1
== startGSN: ready.
GSN started

RelayHub: 0xC89Ce4735882C9F0f0FE26686c53074E09B0D550
RelayRegistrar: 0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab
StakeManager: 0x5b1869D9A4C187F2EAa108f3062412ecf0526b24
Penalizer: 0xCfEB869F69431e42cdB54A4F4f105C19C080A601
Forwarder: 0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B
TestToken (test only): 0x9b1f7F645351AF3631a656421eD2e40f2802E6c0
Paymaster : 0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb
Relay is active, URL = http://127.0.0.1:60307 . Press Ctrl-C to abort

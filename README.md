# Cool Cats Solidity Test

1. Why you used ERC1155SupplyCC ?

My Opinion: The main reason would be that you want a function
that get supply of each `id` purely rather than puting `account`
like balanceOf function in ERC1155 where we only get
owned `id` per specific `account`.

1. ERC1155SupplyCC line 23:
A require statement should be used in order to verify if that
specific `id` is exists or not.
// require(exists(id), "non-existent token")


5 Compile time errors in `Milk` contract

CONTRACT_ROLE is being used in 4 functions but not defined to any address on
constructor
1. gameWithdraw
2. gameTransferFrom
3. gameBurn
4. gameMint
 
MASTER_ROLE is being used `mint` function but not defined to any address on
constructor.

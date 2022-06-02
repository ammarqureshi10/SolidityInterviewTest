# Cool Cats Solidity Test

## ERC1155SupplyCC
Why was this file used and not used directly from the OpenZeppling library?
### My Opinion: 
The main reason would be that you want a function
that get supply of each `id` purely rather than puting `account`
like `balanceOf` function in ERC1155 where we only get
owned `id` per specific `account`.

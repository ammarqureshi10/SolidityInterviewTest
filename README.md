# Cool Cats Solidity Test

## ERC1155SupplyCC
Why was this file used and not used directly from the OpenZeppling library?
### My Opinion: 
The main reason would be that you want a function
that get supply of each `id` purely rather than puting `account`
like `balanceOf` function in ERC1155 where we only get
owned `id` per specific `account`.
And Yes this way we can also rectify NFT if any.

### Minor issue
A `require` statement should be used in `totalSupply` function to verify if entered 
`id` is exists or not i.e. `require(exists(id), "non-existent token")`

![Screenshot](screenshot.png)

Extra code in second if condition line 53:
it can be simple as above if condtion



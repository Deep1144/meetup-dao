import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            // The collection's name, ex. CryptoPunks
            name: "meetupDAO Membership",
            // A description for the collection.
            description: "A DAO for fans of meetupDAO.",
            // The image that will be held on our NFT! The fun part :).
            image: readFileSync("scripts/assets/meetup.png"),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // you can set this to your own wallet address if you want to charge for the drop.
            primary_sale_recipient: AddressZero,
        });

        // this initialization returns the address of our contract
        // we use this to initialize the contract on the thirdweb sdk
        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        // with this, we can get the metadata of our contract
        const metadata = await editionDrop.metadata.get();

        console.log(
            "✅ Successfully deployed editionDrop contract, address:",
            editionDropAddress,
        );
        console.log("✅ editionDrop metadata:", metadata);
    } catch (error) {
        console.log("failed to deploy editionDrop contract", error);
    }
})();

// Successfully deployed editionDrop contract, address: 0x3A5DA05522dcC1d4A8Bcb68B55994355B22C67d6
// ✅ editionDrop metadata: {
//   name: 'meetupDAO Membership',
//   description: 'A DAO for fans of meetupDAO.',
//   image: 'https://gateway.ipfscdn.io/ipfs/QmSUwi81QTKm5T8GpCEBqAe7tKom5124GePmPQATK6LYyc/0',
//   seller_fee_basis_points: 0,
//   fee_recipient: '0x0000000000000000000000000000000000000000',
//   merkle: {},
//   symbol: ''
// }
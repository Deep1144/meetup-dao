import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop('0x3A5DA05522dcC1d4A8Bcb68B55994355B22C67d6');

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "D_D meetup",
                description: "This NFT will give you access to meetupDAO!",
                image: readFileSync("scripts/assets/meetup.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();
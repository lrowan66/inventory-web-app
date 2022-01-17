const { createClient } = require("@astrajs/collections");

exports.handler = async function(events, context) {
    // create an {astra_db} client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const data = JSON.parse(events.body);
    console.log(data);

    const inventoryCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("inventory");

    try {
        let item;

        if(Object.keys(data)[0] === "itemNumber") {
            // delete an item
            item = await inventoryCollection.delete(data.itemNumber);
        } else if(Object.keys(data)[0] === "itemName") {
            //find the item no. of the item with that name, then delete it
            // find a single item
            item = await inventoryCollection.findOne({ name: { $eq: data.itemName } });
            item = await inventoryCollection.delete(item.number);
        }

        return {
            statusCode: 200,
            body: JSON.stringify(item),
        };
    } catch(e) {
        console.error(e);

        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }

}
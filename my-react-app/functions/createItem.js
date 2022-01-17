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

        const item = await inventoryCollection.create(data.itemNumber, {
            warehouse: data.warehouse,
            number: data.itemNumber,
            name: data.itemName,
            price: data.price,
            stock: data.stock,
        });

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
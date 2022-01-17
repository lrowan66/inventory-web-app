const { createClient } = require("@astrajs/collections");

exports.handler = async function(events, context) {
    // create an {astra_db} client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    // create a shortcut to the users collection in the app namespace/keyspace
    const inventoryCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("inventory");

    try {
        const result = await inventoryCollection.find();

        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch(e) {
        console.error(e);

        return {
            statusCode: 500,
            body: JSON.stringify(e),
        }
    }

}

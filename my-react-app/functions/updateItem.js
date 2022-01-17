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

        //if itemNumber not equal to existing item number then delete and create new item.
        if(data.call === "itemNumber") {
            item = await inventoryCollection.get(data.itemNumber);

            if(item.number !== data.updateditemNumber) {
                item = await inventoryCollection.delete(item.number);
                item = await inventoryCollection.create(data.updateditemNumber, {
                    warehouse: data.warehouse,
                    number: data.updateditemNumber,
                    name: data.updateditemName,
                    price: data.price,
                    stock: data.stock,
                });
            } else if(item.number === data.updateditemNumber) {
                item = await inventoryCollection.update(data.updateditemNumber, {
                    warehouse: data.warehouse,
                    number: data.updateditemNumber,
                    name: data.updateditemName,
                    price: data.price,
                    stock: data.stock,
                });
            }
        } else if(data.call === "itemName") {
            item = await inventoryCollection.findOne({ name: { $eq: data.itemName } });
            console.log(item);
            
            if(item.number !== data.updateditemNumber) {
                item = await inventoryCollection.delete(item.number);
                item = await inventoryCollection.create(data.updateditemNumber, {
                    warehouse: data.warehouse,
                    number: data.updateditemNumber,
                    name: data.updateditemName,
                    price: data.price,
                    stock: data.stock,
                });
            } else if(item.number === data.updateditemNumber) {
                item = await inventoryCollection.update(data.updateditemNumber, {
                    warehouse: data.warehouse,
                    number: data.updateditemNumber,
                    name: data.updateditemName,
                    price: data.price,
                    stock: data.stock,
                });
            }
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
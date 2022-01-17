import axios from "axios";
import { useEffect,useState } from 'react';

function InventorySpreadsheet() {
    const [inventory, setInventory] = useState();
    const [recieved, setRecieved] = useState(false);

    const fetchData = async () => {
        const results = await axios.get('/.netlify/functions/getAllItems');
        setInventory(results.data.data);
        setRecieved(true);
    };

    useEffect(() => {
        fetchData()
    },[]);

    const populateTable = () => {
        let table = [];

        if(recieved) {
            for(let i = 0; i < Object.keys(inventory).length; i++) {
                table[i] = (<tr>
                                <td>{inventory[Object.keys(inventory)[i]].warehouse}</td>
                                <td>{inventory[Object.keys(inventory)[i]].number}</td>
                                <td>{inventory[Object.keys(inventory)[i]].name}</td>
                                <td>${inventory[Object.keys(inventory)[i]].price}</td>
                                <td>{inventory[Object.keys(inventory)[i]].stock}</td>
                            </tr>);
            }

            return(
                <>
                    {table}
                </>
            );
        } else {
            return(<td>ERROR: Not yet recieved!</td>);
        }
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Warehouse</th>
                        <th>Item No.</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    { populateTable() }
                </tbody>
            </table>
        </>
    );
}

export default InventorySpreadsheet;
import axios from "axios";
import { React,useState } from 'react';
import InventorySpreadsheet from './InventorySpreadsheet';


function TypeSelect() {
    const [ creates, setCreates ] = useState({});
    const [ updates, setUpdates ] = useState({});
    const [ deletes, setDeletes ] = useState({});

    const [ operation, setOperation ] = useState("create");
    const [ call, setCall ] = useState("itemNumber");
    
    const handleType = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setOperation(event.target.value);
    }

    const handleCall = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setCall(event.target.value);
        setDeletes({});
    }

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        //setInputs(values => ({...values, [name]: value}));

        if(operation === "create") {
            setCreates(values => ({...values, [name]: value}));
        } else if(operation === "update") {
            setUpdates(values => ({...values, [name]: value, call: call}));
        } else if(operation === "delete") {
            setDeletes(values => ({...values, [name]: value}));
            console.log(deletes);
        } else {
            console.log(name);
            console.log(value);
        }
    }

    const handleCreate = async (event) => {
        axios({
            method: 'post',
            url: '/.netlify/functions/createItem',
            data: creates,
        });
    }

    const handleUpdate = async (event) => {
        axios({
            method: 'post',
            url: '/.netlify/functions/updateItem',
            data: updates,
        });
    }

    const handleDelete = async (event) => {
        axios({
            method: 'post',
            url: '/.netlify/functions/deleteItem',
            data: deletes,
        });
    }

    if(operation === "create") {
        return(
            <>
                <form onSubmit={handleCreate}>
                    <label>Select CRUD Operation:
                        <select name="operation" onChange={handleType}>
                            <option value="create">CREATE</option>
                            <option value="read">READ</option>
                            <option value="update">UPDATE</option>
                            <option value="delete">DELETE</option>
                        </select>
                    </label>
                    <p>Create</p>
                    <label>Enter Warehouse:
                        <input 
                            type="text" 
                            name="warehouse" 
                            defaultValue={creates.warehouse || ""}
                            onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Item Number:
                        <input 
                        type="number" 
                        name="itemNumber" 
                        defaultValue={creates.itemNumber || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Item Name:
                        <input 
                        type="text" 
                        name="itemName" 
                        defaultValue={creates.itemName || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Price: $
                        <input 
                        type="number" 
                        name="price"
                        defaultValue={creates.price || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Stock:
                        <input 
                        type="number" 
                        name="stock"
                        defaultValue={creates.stock || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <input type="submit" value="CREATE ITEM" />
                </form>

                
                <h2>Inventory Spreadsheet</h2>
                <InventorySpreadsheet />
            </>
        );
    } else if(operation === "read") {
        return(
            <>
                <form>
                    <label>Select CRUD Operation:
                        <select name="operation" onChange={handleType}>
                            <option value="create">CREATE</option>
                            <option value="read">READ</option>
                            <option value="update">UPDATE</option>
                            <option value="delete">DELETE</option>
                        </select>
                    </label>
                    <p>Read</p>
                </form>
                
                <h2>Inventory Spreadsheet</h2>
                <InventorySpreadsheet />
            </>
        );
    } else if(operation === "update") {
        return(
            <>
                <form onLoad={handleCall} onSubmit={handleUpdate}>
                    <label>Select CRUD Operation:
                        <select name="operation" onChange={handleType}>
                            <option value="create">CREATE</option>
                            <option value="read">READ</option>
                            <option value="update">UPDATE</option>
                            <option value="delete">DELETE</option>
                        </select>
                    </label>
                    <p>Update</p>
                    <label>Update By:
                        <select name="call" onChange={handleCall}>
                            <option value="itemNumber">Item No.</option>
                            <option value="itemName">Item Name</option>
                        </select>
                    </label>
                    <label>Enter:
                        <input 
                            type="text"
                            name={call}
                            defaultValue={""}
                            onBlur={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>Enter Warehouse:
                        <input 
                            type="text" 
                            name="warehouse" 
                            defaultValue={updates.warehouse || ""} 
                            onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Item Number:
                        <input 
                        type="number" 
                        name="updateditemNumber" 
                        defaultValue={updates.updateditemNumber || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Item Name:
                        <input 
                        type="text" 
                        name="updateditemName" 
                        defaultValue={updates.updateditemName || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Price: $
                        <input 
                        type="text" 
                        name="price"
                        defaultValue={updates.price || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <label>Enter Stock:
                        <input 
                        type="text" 
                        name="stock"
                        defaultValue={updates.stock || ""} 
                        onBlur={handleChange}
                        />
                    </label>
                    <input type="submit" value="UPDATE ITEM"/>
                </form>

                <h2>Inventory Spreadsheet</h2>
                <InventorySpreadsheet />
            </>
        );
    } else if(operation === "delete") {
        return(
            <>
                <form onSubmit={handleDelete}>
                    <label>Select CRUD Operation:
                        <select name="operation" onChange={handleType}>
                            <option value="create">CREATE</option>
                            <option value="read">READ</option>
                            <option value="update">UPDATE</option>
                            <option value="delete">DELETE</option>
                        </select>
                    </label>
                    <p>Delete</p>
                    <label>Delete By:
                        <select name="call" onChange={handleCall}>
                            <option value="itemNumber">Item No.</option>
                            <option value="itemName">Item Name</option>
                        </select>
                    </label>
                    <label>Enter:
                        <input 
                            type="text"
                            name={call}
                            defaultValue=""
                            onBlur={handleChange}
                        />
                    </label>
                    
                    <input type="submit" value="DELETE ITEM"/>
                </form>
                
                <h2>Inventory Spreadsheet</h2>
                <InventorySpreadsheet />
            </>
        );
    }
}

export default TypeSelect;
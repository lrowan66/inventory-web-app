import { React } from 'react';
import "./Inventory.css";
import TypeSelect from "./TypeSelect";

const Inventory = () => {
    return (
        <section className="inventory">
            <h1>Inventory Management Page</h1>

            <h2>Inventory Form</h2>
            <TypeSelect />

        </section>
    );
};
  
export default Inventory;
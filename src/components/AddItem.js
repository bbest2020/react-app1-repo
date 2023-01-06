import React from 'react';


export default function AddItem() {
    let items = ["Item 1", "Item 2"];
    const [itemsData, setItemsData] = React.useState(items);
    function addItems() {
        setItemsData(prevItemsData => {
            return [...prevItemsData, `Item ${prevItemsData.length+1}`]
        })
    }
    const ItemsElements = itemsData.map(i => <li>{i}</li>);
    return (
        <div className="card mt-3">
        <div className="card-body">
        <button type="button" className="btn btn-primary" onClick={addItems}>Add Item</button>
        <ul>
            {ItemsElements}
        </ul>
        </div>
        </div>
    );
}
import React, { useState } from "react";

export function Lists() {
    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)
        }])
    }

    return (
        <React.Fragment>
            <button
                onClick={addItems}>
                Add item
            </button>
            <ul>
                {items.map(x => <li key={x.id}>{x.value}</li>)}
            </ul>
        </React.Fragment>
    );
}
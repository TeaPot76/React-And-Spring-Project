import React from 'react';

const CreateOrderTablecard = (props) => {
    if (props.table === null) {
        return (
            <></>
        )
    }
    return (
        <div className="table-card">
            <h1>Table Number: {props.table.tableNumber}</h1>
            <h2>Capacity: {props.table.capacity}</h2>
            <p>Other infor about table and booking goes here...</p>
            <button type="button" onClick={props.orderButtonClick}>Add Order To Table</button>
        </div>
    )
} 

export default CreateOrderTablecard;


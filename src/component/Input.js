import React from 'react';
import { useState } from 'react';
import './Input.css'

const Input = (props) => {
    const [expenseInput, setExpenseInput] = useState(0);


    const inputHandler = (event) => {
        setExpenseInput(event.target.value)
        const cost = event.target.value
        props.onSaveCost(cost)
    }

    return(
        <div className="input-container">
           <input className="interface-input" onChange={inputHandler}></input>
        </div>
    );
}


export default Input;
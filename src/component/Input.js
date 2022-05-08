import React from 'react';
import { useState } from 'react';
import './Input.css'

const Input = (props) => {
    const [expenseInput, setExpenseInput] = useState(0);


    const inputHandler = (event) => {
        setExpenseInput(event.target.value)
    }

    return(
        <div className="input-container">
           <input className="interface-input" onChange={this.props.CostHandler}></input>
        </div>
    );
}


export default Input;
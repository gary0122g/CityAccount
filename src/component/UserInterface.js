import React, { useState } from "react";
import ExpenseButton from "./ExpenseButton";
import Input from "./Input";
import './UserInterface.css'


const InterFaces = props =>{

    const CostHandler = (cost) => {
       console.log(cost)
    }
    
    return (
        <div className="container">
            <Input onSaveCost={CostHandler}></Input>
            <ExpenseButton></ExpenseButton>
        </div>
    );
}

export default InterFaces;
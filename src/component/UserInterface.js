import React, { useState } from "react";
import Building from "./Building";
import ExpenseButton from "./ExpenseButton";
import Input from "./Input";
import './UserInterface.css'


const InterFaces = props =>{

    const CostHandler = (cost) => {
       console.log(cost)
    }
    
    return (
        <div className="container">
            <Input cost={}></Input>
            <ExpenseButton/>
        </div>
    );
}

export default InterFaces;
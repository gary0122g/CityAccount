import React from "react";
import './ExpenseButton.css'
import Input from "./Input";
const ExpenseButton = props =>{

    
    return(
        <div className="button-container">
            <div className="expenseButton">
                <button type='submit' className="button">食物</button>
                <button type='submit' className="button">飲料</button>
                <button type='submit' className="button">交通</button>
                <button type='submit' className="button">消費</button>
                <button type='submit' className="button">娛樂</button>
                <button type='submit' className="button">居家</button>
                <button type='submit' className="button">3C</button>
                <button type='submit' className="button">醫療</button>
                <button type='submit' className="button">其他</button>
                <button type='submit' className="button">收入</button>
            </div>
        </div>
    )
}

export default ExpenseButton;
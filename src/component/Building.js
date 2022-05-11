import React from "react";
import Input from "./Input";

const Building = props => {
    const big = require('/home/gary/CityAccount/src/img/big.jpg')
    const small = require('/home/gary/CityAccount/src/img/small.jpg')
    
    if (Input.expenseInput>=500){
    return(
        <div>
            <img src={big} alt="pic"></img>
        </div>
    );
    }else{
        return(
            <div>
                <img src={small} alt="pic"></img>
            </div>
        )
    }
}

export default Building;
import React, { useState } from "react";
import "./style.css";

const Increaser = () => {
    const [value, setValue] = useState(0);


    const InputField =(e)=>{
        setValue(e.target.value)
    
    }
    const IncreaseVlaue = () => {
        if (value < 20) {
            setValue(parseInt(value) + 1)
        }
        else {
            alert('We can go upto twenty only')
            setValue(20)
        }
    }
    const DecreaseVlaue = () => {
        if (value > 0) {
            setValue(parseInt( value) - 1)
        }
        else {
            alert('We can go upto zero only')
            setValue(0)
        }
    }

    return (<div>
        <h1 className="heading">INCREASE AND DECREASE THE NUMBER</h1>
        <div className="main">
            <div className="actionField" >
                <button className="incBtn" onClick={DecreaseVlaue}>-</button>
                <div>
                    <input className="displayField" value={value} type="number" onChange={InputField} />
                </div>
                <button className="incBtn" onClick={IncreaseVlaue}>+</button>
            </div>
        </div>
        </div>
    )
}
export default Increaser;
import React, { useState } from "react";
import "./style.css";

const Increaser = () => {
    const [value, setValue] = useState(0);


    const InputField =(e)=>{
        setValue(e.target.value)
    
    }
    const IncreaseVlaue = () => {
        if (value < 20) {
            setValue(value + 1)
        }
        else {
            alert('We can go upto twenty only')
            setValue(20)
        }
    }
    const DecreaseVlaue = () => {
        if (value > 0) {
            setValue(value - 1)
        }
        else {
            alert('We can go upto zero only')
            setValue(0)
        }
    }

    return (
        <div className="main">
            <div className="actionField" >
                <button className="incBtn" onClick={DecreaseVlaue}>-</button>
                <div>
                    <input className="displayField" value={value} onChange={InputField} />
                </div>
                <button className="incBtn" onClick={IncreaseVlaue}>+</button>
            </div>
        </div>
    )
}
export default Increaser;
import React, { useState } from "react";
import "./style.css";

const Increaser = () => {
    const [value, setValue] = useState(0);

    const IncreaseVlaue = () => {
        setValue(value + 1)
    }
    const DecreaseVlaue = () => {
        if (value > 0) {
            setValue(value - 1)
        }
        else {
            alert('Zero is the last decreaseble no')
            setValue(0)
        }
    }

    return (
        <div className="main">
            <div className="actionField" >
                <button className="incBtn" onClick={DecreaseVlaue}>-</button>
                <div>
                    <h1>  {value} </h1>
                </div>
                <button className="incBtn" onClick={IncreaseVlaue}>+</button>
            </div>
        </div>
    )
}
export default Increaser;
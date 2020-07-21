import React, {useState} from 'react';

type CounterType = {}


export function Counter() {

    let [number, setNumber] = useState<any>(0)
    const counterPlus = () => {
        let plus = number + 1
        if (plus === 6) return
        setNumber(plus)
    }

    const reset = () => {
        setNumber(0)
    }

    const counterStyle = {
        width: "400px",
        height: "400px",
        border: "2px solid deepskyblue",
        display: "inline-block",
        borderRadius: "5px",
        backgroundColor: "black"
    };

    const numberStyle = {
        display: "inline-block",
        width: "92%",
        height: "44%",
        border: "2px solid deepskyblue",
        borderRadius: "5px",
        margin: "4%",
        fontSize: "700%",
        backgroundColor: "deepskyblue",
        color: number === 5 ? "red" : "black"
    };


    const buttonsStyle = {
        display: "inline-block",
        width: "92%",
        height: "42%",
        border: "2px solid deepskyblue",
        marginLeft: "4%",
        borderRadius: "5px",
        backgroundColor: "black"
    };

    const incStyle = {
        width: "40%",
        height: "70%",
        border: "2px solid deepskyblue",
        margin: "6%",
        fontSize: "300%",
        borderRadius: "5px",
        backgroundColor: number === 5 ? "lavender" : "deepskyblue"
    };

    const resetStyle = {
        width: "40%",
        height: "70%",
        border: "2px solid deepskyblue",
        marginLeft: "1%",
        fontSize: "300%",
        borderRadius: "5px",
        backgroundColor: number === 0 ? "lavender" : "deepskyblue"
    };

    const num = {
        marginLeft: "42%"
    }

    return (
        <div style={counterStyle}>
            <div style={numberStyle}><div style={num}>{number}</div></div>
            <div style={buttonsStyle}>
                <button onClick={counterPlus} style={incStyle}>Ink</button>
                <button onClick={reset} style={resetStyle}>Reset</button>
            </div>
        </div>
    )
}

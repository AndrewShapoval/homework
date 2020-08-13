import React, {ChangeEvent, useState} from 'react';

type CounterType = {}


export function Counter() {

    let [maxNumber, setMaxNumber] = useState<any>(5)
    let [startNumber, setStartNumber] = useState<number>(0)
    let [number, setNumber] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)
    let [active, setActive] = useState<boolean>(true)
    let [saveMaxValue, setSaveMaxValue] = useState<any>("")
    let [saveStartValue, setSaveStartValue] = useState<any>("")

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    const counterPlus = () => {
        let plus = number + 1
        if (plus >= maxNumber + 1) return
        setNumber(plus)
        let newRestoreStartValue = restoreState("startValue", {x: ""})
        setSaveStartValue(newRestoreStartValue.x)

        let newRestoreMaxValue = restoreState("maxValue", {x: ""})
        setSaveMaxValue(newRestoreMaxValue.x)
    }

    function startValueHandler(e: ChangeEvent<HTMLInputElement>) {
        let newStartValue = Number(e.currentTarget.value)
        setStartNumber(newStartValue)
        newStartValue >= maxNumber || newStartValue < 0 ? setError(true) : setError(false)
        setSaveStartValue(newStartValue)
        // error ? setActive(false) :
        setActive(true)
    }

    function maxValueHandler(e: ChangeEvent<HTMLInputElement>) {
        let newMaxValue = Number(e.currentTarget.value)
        setMaxNumber(newMaxValue)
        setSaveMaxValue(newMaxValue)
        startNumber >= newMaxValue || newMaxValue < 1 || startNumber < 0 ? setError(true) : setError(false)
        // error ? setActive(false) :
        setActive(true)
    }

    function setValueHandler() {
        setActive(false)
        setNumber(startNumber)
        setMaxNumber(maxNumber)
        saveState("maxValue", {x: maxNumber})
        saveState("startValue", {x: startNumber})

    }

    function reset() {
        setNumber(startNumber)
    }

    const setStyle = {
        width: "40%",
        height: "70%",
        border: "2px solid deepskyblue",
        margin: "6%",
        fontSize: "300%",
        borderRadius: "5px",
        backgroundColor: active ? "deepskyblue" : "lavender"
    };
    const counterStyle = {
        width: "400px",
        height: "400px",
        border: "2px solid deepskyblue",
        display: "inline-block",
        borderRadius: "5px",
        backgroundColor: "black",
        margin: "20px"
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
        color: number >= maxNumber ? "red" : "black"
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
        backgroundColor: number >= maxNumber ? "lavender" : "deepskyblue"
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
    const numStyle = {
        marginLeft: "42%"
    }
    const incorrectValue = {
        fontSize: "45%",
        color: "red",
        marginTop: "15%",
        paddingLeft: "3%"
    }
    const itemFixValue = {
        display: "inline-block",
        width: "92%",
        height: "44%",
        border: "2px solid deepskyblue",
        borderRadius: "5px",
        margin: "4%",
        backgroundColor: "deepskyblue",
    }
    const fixValue = {
        fontSize: "250%",
        marginTop: "15px"
    }
    const inputStyle = {
        borderRadius: "5px",
        backgroundColor: error ? "red" : "LightCyan",
        height: "30px",
        width: "60px",
        fontSize: "90%",
        paddingLeft: "20px",
    }
    const enterValueStyle = {
        fontSize: "25%",
        marginTop: "20%",
        paddingLeft: "3%"
    }

    return (
        <div>
            <div style={counterStyle}>
                <div style={itemFixValue}>
                    <div style={fixValue}>max value: <input type="number"
                                                            value={saveMaxValue}
                                                            onChange={maxValueHandler}
                                                            style={inputStyle}/></div>
                    <div style={fixValue}>start value: <input type="number"
                                                              value={saveStartValue}
                                                              onChange={startValueHandler}
                                                              style={inputStyle}/></div>
                </div>
                <div style={buttonsStyle}>
                    <button onClick={setValueHandler} style={setStyle}>Set</button>
                </div>
            </div>
            <div style={counterStyle}>
                <div style={numberStyle}>
                    {error
                        ? <div style={incorrectValue}>incorrect value!</div>
                        : active
                            ? <div style={enterValueStyle}>enter values and press 'set'</div>
                            : <div style={numStyle}>{number}</div>}
                </div>
                <div style={buttonsStyle}>
                    <button onClick={counterPlus} style={incStyle}>Ink</button>
                    <button onClick={reset} style={resetStyle}>Reset</button>
                </div>
            </div>
        </div>
    )
}

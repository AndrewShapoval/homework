import React, {useState} from "react";
import {SuperButton} from "../common/SuperButton/SuperButton";

export const Clock = () => {

    const [timerId, setTimerId] = useState()
    const [date, setDate] = useState(new Date())
    const [fullDate, setFullDate] = useState()

    const onClickSetInterval = () => {
        clearInterval(timerId)
        const id = setInterval(() => setDate(new Date()), 1000)
        setTimerId(id)
    }

    const dateStyle = {
        backgroundColor: "green",
        width: "60px"
    }

    return (
        <div>
            <div>
                <SuperButton onClick={onClickSetInterval} name={"setInterval"}/>
                <SuperButton onClick={() => clearInterval(timerId)} name={"clearInterval"}/>
            </div>
            <div onMouseMove={() => setFullDate(true)} onMouseOut={() => setFullDate(false)}>
                <span>{date.getHours()}</span>:
                <span>{date.getMinutes()}</span>:
                <span>{date.getSeconds()}</span>
            </div>
            {fullDate && <div style={dateStyle}>
                <span>{date.getDate()}</span>:
                <span>{date.getMonth()}</span>:
                <span>{date.getFullYear()}</span>
            </div>}

        </div>
    )
}
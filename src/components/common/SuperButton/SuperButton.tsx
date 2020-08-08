import React from "react";

type PropsType = {
    name?: string
    onClick?: ()=> void
}

export function SuperButton(props: PropsType) {

    const buttonStyle = {
        minWidth: "40px",
        height: "25px",
        borderRadius: "5px",
        backgroundColor: "deepskyblue",
        marginLeft: "10px",
        margin: "3px"
    }

    return (
            <button style={buttonStyle} onClick={props.onClick}>{props.name}</button>
    )

}
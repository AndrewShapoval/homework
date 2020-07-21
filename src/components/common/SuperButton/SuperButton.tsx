import React from "react";

export function SuperButton(props: any) {

    const buttonStyle = {
        minWidth: "40px",
        height: "30px",
        borderRadius: "10px",
        backgroundColor: "deepskyblue",
    }

    return (
        <div >
            <button style={buttonStyle} onClick={props.onClick}>{props.name}</button>
        </div>
    )

}
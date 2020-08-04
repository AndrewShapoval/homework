import React from "react";

// type PropsType = {
//     name: string
//     onClick: ()=> void
// }

export function SuperButton(props: any) {

    const buttonStyle = {
        minWidth: "40px",
        height: "30px",
        borderRadius: "10px",
        backgroundColor: "deepskyblue",
        marginLeft: "10px"
    }

    return (
        <div >
            <button style={buttonStyle} onClick={props.onClick}>{props.name}</button>
        </div>
    )

}
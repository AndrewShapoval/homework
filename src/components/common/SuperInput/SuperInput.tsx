import React from "react";

export function SuperInput(props: any) {

    const inputStyle = {
        borderRadius: "10px",
        backgroundColor: "LightCyan",
        padding: "6px 6px 6px 19px"
    }

    return (
        <div>
            <input type="text" style={inputStyle}
                   value={props.value}
                   onChange={props.onChange}
                   onKeyPress={props.onKeyPress}/>
        </div>
    )

}
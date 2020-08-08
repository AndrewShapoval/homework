import React, {ChangeEvent, KeyboardEvent} from "react";

type PropsType = {
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
    onBlur?: () => void
}

export function SuperInput(props: PropsType) {

    const inputStyle = {
        borderRadius: "10px",
        backgroundColor: "LightCyan",
        padding: "6px 6px 6px 19px",
        margin: "3px"
    }

    return (
            <input type="text" style={inputStyle}
                   value={props.value}
                   onChange={props.onChange}
                   onKeyPress={props.onKeyPress}
                   onBlur={props.onBlur}
                   autoFocus={true}
            />
    )

}
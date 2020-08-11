import React, {ChangeEvent, useState} from "react";
import {SuperInput} from "../SuperInput/SuperInput";

type PropsType = {
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function EditableSpan(props: PropsType) {

    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const DeActivateEditMode = () => {
        setEditMode(false)
    }

    return (
        editMode
            ? <SuperInput onBlur={DeActivateEditMode}
                          value={props.value}
                          onChange={props.onChange}/>
            : <span onDoubleClick={activateEditMode}
            >EditableSpan</span>
    )
}
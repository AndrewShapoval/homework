import React, {useState} from "react";
import {SuperInput} from "../SuperInput/SuperInput";

export function EditableSpan() {

    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const DeActivateEditMode = () => {
        setEditMode(false)
    }

    return (
        editMode
            ? <SuperInput onBlur={DeActivateEditMode}/>
            : <span onDoubleClick={activateEditMode}
            >EditableSpan</span>
    )
}
import React from "react";
import {SuperInput} from "./SuperInput/SuperInput";
import {SuperCheckBox} from "./SuperCheckBox/SuperCheckBox";
import {SuperButton} from "./SuperButton/SuperButton";
import {EditableSpan} from "./EditableSpan/EditableSpan";

export function Common() {
    return (
    <div>
        <SuperInput/>
        <SuperCheckBox/>
        <SuperButton/>
        <EditableSpan/>
    </div>
    )
}
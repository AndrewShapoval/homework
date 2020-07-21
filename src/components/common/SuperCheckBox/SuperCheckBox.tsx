import React from "react";
import s from'./SuperCheckBox.module.css'

export function SuperCheckBox() {
    return (
        <label className={s.label}>
            <input type="checkbox" className={s.checkbox}/>
            <span className={s.fake}></span>
            <span className={s.text}></span>
        </label>
    )

}
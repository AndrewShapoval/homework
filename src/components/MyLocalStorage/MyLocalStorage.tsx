import React, {ChangeEvent, useState} from "react";
import {EditableSpan} from "../common/EditableSpan/EditableSpan";
import {SuperButton} from "../common/SuperButton/SuperButton";

export function MyLocalStorage() {
    // вот вам функция для сохранения объектов в память браузера (данные в этом хранилище сохраняться даже при перезагрузке компа):
    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }
// * и вот вам функция для получения сохранённого объекта в памяти браузера:
    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }
// * использование:
    type StateType = {
        x: string
        y: number
    }
    // saveState<StateType>("test", {x: "A", y: 1});
// сохраняем объект типа StateType в ячейке "test"
//     const state: StateType = restoreState<StateType>("test", {x: "", y: 0})
    let [value, setValue] = useState<string>("")

    function onChangeValue(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
    }

    const saveStateHandler = () => {
        saveState("test",{x: value})
        setValue("")
    }

    const restoreStateHandler = () => {
        const stateFromLocalStorage = restoreState("test",{x:""})
        setValue(stateFromLocalStorage.x)
    }

    return (
        <div>
        <EditableSpan value={value} onChange={onChangeValue}/>
        <SuperButton name={"Save"} onClick={saveStateHandler}/>
        <SuperButton name={"Restore"} onClick={restoreStateHandler}/>
        </div>

    )
}
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TaskType, ValuesType} from "../../App";
import {v1} from "uuid";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {SuperInput} from "../common/SuperInput/SuperInput";
import t from './TodoList.module.css'
import {SuperCheckBox} from "../common/SuperCheckBox/SuperCheckBox";

type PropsType = {
    tasks: Array<TaskType>,
    removeTasks: (taskId: string) => void,
    changeFilter: (newFilterValue: ValuesType) => void
}

let array = [{id: v1(), name: "Andrew"},
    {id: v1(), name: "Sveta"}]

export function TodoList(props: PropsType) {

    let [taskName, setTaskName] = useState<any>("");
    let alertTask = () => {
        taskName === "" ? alert("Enter your name") : alert("Hello " + taskName);
        pushArrayNames(taskName)
        setTaskName(array.length)
    }

    function pushArrayNames(taskName: string) {
        let newName = {id: v1(), name: taskName};
        array.push(newName)

    }

    function onTaskNameChanged(e: ChangeEvent<HTMLInputElement>) {
        setTaskName(e.currentTarget.value)
    }

    function onAlertTaskKeyPressed(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            alertTask()
        }
    }

    return (
        <div>
            <h3>What to do</h3>
            <div className={t.input}>
                <SuperInput value={taskName}
                            onChange={onTaskNameChanged}
                            onKeyPress={onAlertTaskKeyPressed}/>
                <div>
                    <SuperButton onClick={alertTask} name={"+"}/>
                </div>
            </div>

            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <SuperCheckBox/>
                            <span>{t.name}</span>
                            <SuperButton onClick={() => props.removeTasks(t.id)} name={"delete"}/>
                        </li>
                    )
                })}

            </ul>
            <div className={t.allNoMatterImportant}>
                <div className={t.important}>
                    <SuperButton name={"Important"} onClick={() => {
                        props.changeFilter("important")
                    }}/>
                </div>
                <div className={t.noMatter}>
                    <SuperButton name={"No Matter"} onClick={() => {
                        props.changeFilter("noMatter")
                    }}/>
                </div>
                <div className={t.all}>
                    <SuperButton name={"All"} onClick={() => {
                        props.changeFilter("all")
                    }}/>
                </div>
            </div>
        </div>
    )
}
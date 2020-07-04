import React from "react";
import {TaskType, ValuesType} from "../../App";

type PropsType = {
    tasks: Array<TaskType>,
    removeTasks: (taskId: number) => void,
    changeFilter: (newFilterValue: ValuesType) => void
}

export function TodoList(props: PropsType) {
    return (
        <div>
            <div>
                <h3>What to do</h3>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={t.id}>
                            <span>{t.n}</span>
                            <button onClick={()=>{props.removeTasks(t.id)}}> x </button>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=> {props.changeFilter("important")}}> Important</button>
                <button onClick={()=> {props.changeFilter("noMatter")}}> No Matter</button>
                <button onClick={()=> {props.changeFilter("all")}}> All</button>
            </div>
        </div>
    )
}
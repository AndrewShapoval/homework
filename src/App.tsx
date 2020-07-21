import React, {useState} from 'react';
import './App.css';
import Homework from "./components/Homework";
import {TodoList} from "./components/TodoList/TodoList";
import {v1} from "uuid";
import {Counter} from "./components/Counter/Counter";
import {Common} from "./components/common/Common";

export type TaskType = {
    id: string
    name: string
    value: boolean
}

export type ValuesType = "important" | "noMatter" | "all";

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), name: "Family", value: true},
        {id: v1(), name: "React", value: true},
        {id: v1(), name: "Job", value: false},
        {id: v1(), name: "Travels", value: true},
        {id: v1(), name: "Games", value: false}
    ])

    function removeTasks(taskId: string) {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }


    let [filter, setFilter] = useState<ValuesType>("all")

    function changeFilter(newFilterValue: ValuesType) {
        setFilter(newFilterValue)
    }

    let tasksTodoList = tasks;
    if (filter === "important") {
        tasksTodoList = tasks.filter(t => t.value)
    }
    if (filter === "noMatter") {
        tasksTodoList = tasks.filter(t => !t.value)
    }

        return (
            <div className="App">
                {/*<Homework name='Serg' message='How are you?'/>*/}
                <TodoList tasks={tasksTodoList}
                          removeTasks={removeTasks}
                          changeFilter={changeFilter}
                          />
                <Common/>
                {/*<Counter/>*/}
            </div>
        );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Homework from "./components/Homework";
import {TodoList} from "./components/TodoList/TodoList";

export type TaskType = {
    id: number
    n: string
    p: ValuesType
    im: boolean
}

export type ValuesType = "important" | "noMatter" | "all";

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, n: "Job", p: "important", im: true},
        {id: 2, n: "Anime", p: "noMatter", im: false},
        {id: 3, n: "Games", p: "noMatter", im: false},
        {id: 4, n: "React", p: "important", im: true},
        {id: 5, n: "HTML", p: "important", im: true}
    ])

    function removeTasks(taskId: number) {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }

    let [filter, setFilter] = useState<ValuesType>("all")

    function changeFilter(newFilterValue: ValuesType) {
        setFilter(newFilterValue)
    }

    let tasksTodoList = tasks;
    if (filter === "important") {
        tasksTodoList = tasks.filter(t => t.im)
    }
    if (filter === "noMatter") {
        tasksTodoList = tasks.filter(t => !t.im)
    }

        return (
            <div className="App">
                {/*<Homework name='Serg' message='How are you?'/>*/}
                <TodoList tasks={tasksTodoList}
                          removeTasks={removeTasks}
                          changeFilter={changeFilter}/>
            </div>
        );
}

export default App;

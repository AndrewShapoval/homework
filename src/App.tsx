import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {v1} from "uuid";
import {Counter} from "./components/Counter/Counter";
import {Common} from "./components/common/Common";
import {HashRouter, Route} from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Homework from "./components/TaskOne/Homework";
import {MyLocalStorage} from "./components/MyLocalStorage/MyLocalStorage";
import {Select} from "./components/common/Select/Select";
import {Radio} from "./components/common/Radio/Radio";

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

    //Select

    let selectItems = [
        {value: 1, tittle: "Moscow"},
        {value: 2, tittle: "Kiev"},
        {value: 3, tittle: "Minsk"}
    ]

    let [selectValue, setSelectValue] = useState(1)

    const selectValueOnChange = (value: number) => {
        setSelectValue(value)
    }

    //Radio

    let array = [
        {id: 1, tittle: "Berlin"},
        {id: 2, tittle: "Madrid"},
        {id: 3, tittle: "London"},
        {id: 4, tittle: "Istanbul"},
    ]

    let [radioValue, setRadioValue] = useState(1)

    function onChangeValueRadio(id: number) {
        setRadioValue(id)
    }

    return (
        <HashRouter>
            <div className="App">
                <NavBar/>
                <Route path='/PreJunior' render={() =>
                    <Homework name='Serg' message='How are you?'/>
                }/>
                <Route path='/PreJunior' render={() =>
                    <TodoList tasks={tasksTodoList}
                              removeTasks={removeTasks}
                              changeFilter={changeFilter}/>
                }/>
                <Route path='/PreJunior' render={() =>
                    <Common/>
                }/>
                <Route path='/Junior' render={() => <MyLocalStorage/>}/>
                <Route path='/Junior' render={() => <Select onChange={selectValueOnChange}
                                                            value={selectValue}
                                                            items={selectItems}/>}/>
                <Route path='/Junior' render={() => <Radio name={"city"}
                                                           onChange={onChangeValueRadio}
                                                           value={radioValue}
                                                           array={array}/>}/>
                <Route path='/Junior+' render={() => <div>Junior+</div>}/>
                {/*<Counter/>*/}
            </div>
        </HashRouter>
    );
}

export default App;

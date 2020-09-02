import React, {useState} from "react";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {hwReducer} from "../../state/homeWorkReducer";


export const Hw8 = () => {

    let [people, setPeople] = useState([
        {id: "1", name: 'Andrew', age: 32},
        {id: "2", name: 'Sveta', age: 26},
        {id: "3", name: 'Serega', age: 4},
        {id: "4", name: 'Alex', age: 34}
    ])

    const SetUp = () => {
        debugger
        let newPeople = hwReducer(people, {type: 'SORT', payload: 'up'})
        setPeople(newPeople)
    }

    const SetDown = () => {
        let newPeople = hwReducer(people, {type: 'SORT', payload: 'down'})
        setPeople(newPeople)
    }

    return (
        <div>
            <SuperButton name={"Up"} onClick={SetUp}/>
            <SuperButton name={"Down"} onClick={SetDown}/>
            {people.map(p => <div key={p.id}>Name: {p.name}. Age: {p.age}</div>)}
        </div>
    )
}
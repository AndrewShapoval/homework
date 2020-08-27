import React, {ChangeEvent} from "react";

type PropsType = {
    array: Array<ItemType>
    name: string
    value: number
    onChange: (id: number) => void
}

type ItemType = {
    id: number
    tittle: string
}

export function Radio(props: PropsType) {

    let onChange = (id: number) => {
        props.onChange(id)
        debugger
    }


    return (
        <div>
            {
                props.array.map(obj => <div>
                    <input type="radio"
                           onChange={() => onChange(obj.id)}
                           value={props.value}
                           name={props.name}/> {obj.tittle}
                </div>)
            }
        </div>
    )
}
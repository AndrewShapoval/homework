import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type PropsType = {
    items: Array<ItemType>
    value: number
    onChange: (value: number) => void
}
type ItemType = {
    value: number
    tittle: string
}


export function Select(props: PropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: number) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false);
        }
    }

    return (
        <div className={s.wrapper} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.tittle} onClick={toggleItems}>
                {selectedItem && selectedItem.tittle}
            </span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(item =>
                        <div key={item.value}
                             onMouseEnter={() => setHoveredElementValue(item.value)}
                             onClick={() => onItemClick(item.value)}
                             className={s.item + " " + (hoveredItem === item ? s.selected : "")}>{item.tittle}
                        </div>)}
                </div>
            }
        </div>
    )
}
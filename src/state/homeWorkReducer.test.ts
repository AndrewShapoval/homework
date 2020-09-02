import {hwReducer} from "./homeWorkReducer"

test('age of people should be sorted in ascending order', () => {
    const startState = [
        {id: "1", name: 'Andrew', age: 32},
        {id: "2", name: 'Sveta', age: 26},
        {id: "3", name: 'Serega', age: 4,},
        {id: "4", name: 'Alex', age: 34,}
    ]

    const endState = hwReducer(startState, {type: 'SORT', payload: 'up'})

    expect(endState[0].age).toBe(4);
    expect(endState[1].age).toBe(26);
    expect(endState[2].id).toBe("1");
});

test('age of people should be sorted in descending order', () => {
    const startState = [
        {id: "1", name: 'Andrew', age: 32},
        {id: "2", name: 'Sveta', age: 26},
        {id: "3", name: 'Serega', age: 4,},
        {id: "4", name: 'Alex', age: 34,}
    ]

    const endState = hwReducer(startState, {type: 'SORT', payload: 'down'})

    expect(endState[0].age).toBe(34);
    expect(endState[1].age).toBe(32);
    expect(endState[3].id).toBe("3");
});

test('people must be over 18', () => {
    const startState = [
        {id: "1", name: 'Andrew', age: 32},
        {id: "2", name: 'Sveta', age: 26},
        {id: "3", name: 'Serega', age: 4,},
        {id: "4", name: 'Alex', age: 34,}
    ]

    const endState = hwReducer(startState, {type: 'CHECK', payload: 18})

    expect(endState.length).toBe(3);
    expect(endState[2].id).toBe("4");
});


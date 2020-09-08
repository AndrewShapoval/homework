

export const hwReducer = (state: Array<{ id: string, name: string, age: number }>,
                          action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.age - b.age)
            } else
                return [...state].sort((a, b) => b.age - a.age)
        case 'CHECK':
            return state.filter(p => p.age >= 18)
        default:
            return state
    }
};


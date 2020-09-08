type initialStateType = {
    loading: boolean
}

let initialState: initialStateType = {
    loading: false
}

export const myReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: action.loading}
        default:
            return state
    }
}

export const setLoading = (loading: boolean) => {
    return {
        type: "SET_LOADING",
        loading
    } as const
}


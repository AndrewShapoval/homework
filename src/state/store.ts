import {combineReducers, createStore} from 'redux';
import {myReducer} from "./reducer9";


const rootReducer = combineReducers({
    auth: myReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
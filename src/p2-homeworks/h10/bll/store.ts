import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const reducers = combineReducers({
    loading: loadingReducer,

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
// @ts-ignore
window.store = store // for dev

export const usedTypedSelector:TypedUseSelectorHook<AppStoreType> = useSelector
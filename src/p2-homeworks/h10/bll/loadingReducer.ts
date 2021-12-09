export type initStateType = typeof initState

const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SHOW_LOADING':
            return {...state, loading: action.payload.loading}
        default:
            return state
    }
}


export type ActionType = ShowLoadingACActionType

export type ShowLoadingACActionType = {
    type: 'SHOW_LOADING',
    payload: {
        loading: boolean
    }
}

export const showLoadingAC = (loading: boolean): ShowLoadingACActionType => ({
    type: 'SHOW_LOADING',
    payload: {
        loading
    }
} as const)



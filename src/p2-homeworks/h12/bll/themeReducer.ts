const initState = {
    theme: 'dark'
};

export type initStateType = typeof initState

export const themeReducer = (state = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme:action.payload.theme};
        }
        default:
            return state;
    }
};


export type ActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme: string) => ({type: 'CHANGE_THEME', payload: {theme}} as const);
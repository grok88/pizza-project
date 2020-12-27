import {AppRootStateType} from './store';


type FiltersReducerAT = ReturnType<typeof setSortBy>

type InitialStateType = typeof initialState;

const initialState = {
    category: 0,
    sortBy: 'popular'
}

export const filtersReducer = (state: InitialStateType = initialState, action: FiltersReducerAT): InitialStateType => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state;
    }
}

export const setSortBy = (value: string) => {
    return {
        type: 'SET_SORT_BY',
        payload: value
    }
}
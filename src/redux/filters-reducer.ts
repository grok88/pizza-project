type FiltersReducerAT = ReturnType<typeof setSortBy> | ReturnType<typeof setCategory>

type InitialStateType = typeof initialState;

const initialState = {
    category: null as null | number,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
}

export const filtersReducer = (state: InitialStateType = initialState, action: FiltersReducerAT): InitialStateType => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}

export const setSortBy = (obj:any) => {
    return {
        type: 'SET_SORT_BY',
        payload: obj
    } as const;
}
export const setCategory = (index: number | null) => {
    return {
        type: 'SET_CATEGORY',
        payload: index
    } as const;
}
import {PizzaType} from '../pages/Home/Home';
import {Dispatch} from 'redux';
import axios from 'axios';

type SetPizzasAC = ReturnType<typeof setPizzas>;
type SetIsLoadedAC = ReturnType<typeof setIsLoaded>

type PizzasReducerAT = SetPizzasAC | SetIsLoadedAC;

type InitialStateType = typeof initialState;

const initialState = {
    items: [] as PizzaType[],
    isLoaded: false
}

export const pizzasReducer = (state: InitialStateType = initialState, action: PizzasReducerAT): InitialStateType => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload
            }
        case 'SET_IS-LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state;
    }
}

//actions
export const setPizzas = (items: PizzaType[]) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    } as const;
}

export const setIsLoaded = (value: boolean) => {
    return {
        type: 'SET_IS-LOADED',
        payload: value
    } as const;
}

export const getPizzas = () => async (dispatch: Dispatch) => {
    dispatch(setIsLoaded(true));
    try {
        const res = await axios.get('http://localhost:3001/pizzas');
        console.log(res.data)
        dispatch(setPizzas(res.data))
        dispatch(setIsLoaded(false));
    } catch (e) {
        console.log(e)
    }
}
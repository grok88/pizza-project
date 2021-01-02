import {PizzaType} from '../pages/Home/Home';
import {PizzaObjType} from '../components/pizza-block/PizzaBlock';

type SetPizzasAC = ReturnType<typeof setPizzaToCart>;

type PizzasReducerAT = SetPizzasAC ;

type InitialStateType = typeof initialState;
type sortType = {
    [key: string]: any
}
const initialState = {
    items: {} as sortType,
    totalPrize: 0,
    totalCount: 0
}

export const cartReducer = (state: InitialStateType = initialState, action: PizzasReducerAT): InitialStateType => {
    switch (action.type) {
        case 'SET_PIZZA_TO_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [
                        ...state.items[action.payload.id],
                        action.payload
                    ]
            }
            const allPizzas = [].concat.apply([], Object.values(newItems));
            const totalPrice = allPizzas.reduce((acc: any, arr: any) => {
                return acc + arr.price;
            }, 0)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrize: totalPrice
            }
        }
        default:
            return state;
    }
}

//actions
export const setPizzaToCart = (pizza: PizzaObjType) => {
    return {
        type: 'SET_PIZZA_TO_CART',
        payload: pizza
    } as const;
}


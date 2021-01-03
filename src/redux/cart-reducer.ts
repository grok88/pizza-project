import {PizzaObjType} from '../components/pizza-block/PizzaBlock';

type SetPizzasAC = ReturnType<typeof setPizzaToCart>;
type ClearCartAC = ReturnType<typeof clearCart>;
type RemoveCartItemAC = ReturnType<typeof removeCartItem>;
type PlusItemAC = ReturnType<typeof plusCartItem>;
type MinusItemAC = ReturnType<typeof minusCartItem>;

type PizzasReducerAT = SetPizzasAC | ClearCartAC | RemoveCartItemAC | PlusItemAC | MinusItemAC;

export type CartInitialStateType = typeof initialState;
type sortType = {
    [key: string]: any
}
const initialState = {
    items: {} as sortType,
    totalPrize: 0,
    totalCount: 0
}

const getTotalPrice = (arr: any) => arr.reduce((sum: any, obj: any) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: any, path: string) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};


export const cartReducer = (state: CartInitialStateType = initialState, action: PizzasReducerAT): CartInitialStateType => {
    switch (action.type) {
        case 'SET_PIZZA_TO_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [
                    ...state.items[action.payload.id].items,
                    action.payload
                ];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrize: currentPizzaItems.reduce((acc: any, arr: any) => {
                        return acc + arr.price;
                    }, 0)
                }
            }

            // @ts-ignore
            // const totalCount = Object.keys(newItems).reduce((acc, key) => sum + newItems[key].items.length,0);

            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items);
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
        case 'CLEAR_CART':
            return {
                items: {},
                totalCount: 0,
                totalPrize: 0
            }
        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrize = newItems[action.payload].totalPrize;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrize: state.totalPrize - currentTotalPrize,
                totalCount: state.totalCount - currentTotalCount
            }
        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrize: getTotalPrice(newObjItems),
                },
            };

            const totalCount: any = getTotalSum(newItems, 'items.length');
            const totalPrize: any = getTotalSum(newItems, 'totalPrize');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrize,
            };
        }
        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrize: getTotalPrice(newObjItems),
                },
            };

            const totalCount: any = getTotalSum(newItems, 'items.length');
            const totalPrize: any = getTotalSum(newItems, 'totalPrize');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrize,
            };
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
export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    } as const;
}
export const removeCartItem = (id: number) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: id
    } as const;
}
export const plusCartItem = (id: number) => {
    return {
        type: 'PLUS_CART_ITEM',
        payload: id
    } as const;
}
export const minusCartItem = (id: number) => {
    return {
        type: 'MINUS_CART_ITEM',
        payload: id
    } as const;
}


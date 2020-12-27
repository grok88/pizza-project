import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {filtersReducer} from './filters-reducer';
import {pizzasReducer} from './pizzas-reducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas:pizzasReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
// export const store = createStore(rootReducer, applyMiddleware(thunk));
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
     applyMiddleware(thunk)
 ));
//@ts-ignore
window.store = store;
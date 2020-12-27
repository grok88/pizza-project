import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Header} from './components';
import {Cart, Home} from './pages';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {PizzaType} from './pages/Home/Home';
import {getPizzas} from './redux/pizzas-reducer';


function App() {
    const dispatch = useDispatch();
    const pizzas = useSelector<AppRootStateType, PizzaType[]>(state => state.pizzas.items);

    useEffect(() => {
        dispatch(getPizzas());
    }, [])

    console.log(pizzas)
    return <div className="wrapper">
        <Header/>
        <div className="content">
            <Switch>
                <Route exact path={'/'} render={() => <Home items={pizzas}/>}/>
                <Route exact path={'/cart'} render={() => <Cart/>}/>
                <Route path={'/404'} render={() => <h1>Page not Found!</h1>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    </div>
}

export default App;

import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Header} from './components';
import {Cart, Home} from './pages';
import {useDispatch} from 'react-redux';
import {getPizzas} from './redux/pizzas-reducer';


function App() {
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(getPizzas());
    // }, [])

    return <div className="wrapper">
        <Header/>
        <div className="content">
            <Switch>
                <Route exact path={'/'} render={() => <Home/>}/>
                <Route exact path={'/cart'} render={() => <Cart/>}/>
                <Route path={'/404'} render={() => <h1>Page not Found!</h1>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    </div>
}

export default App;

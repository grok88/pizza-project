import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, SortPopup} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSortBy} from '../../redux/filters-reducer';
import {AppRootStateType} from '../../redux/store';
import {getPizzas} from '../../redux/pizzas-reducer';
import {setPizzaToCart} from '../../redux/cart-reducer';
import {PizzaObjType} from '../../components/pizza-block/PizzaBlock';

export type PizzaType = {
    category: number
    id: number
    imageUrl: string
    name: string
    price: number
    rating: number
    sizes: number[]
    types: number[]
}

type HomePropsType = {
    // items: PizzaType[];
}
const categoryName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'}, {
    name: 'цене',
    type: 'price',
    order: 'desc'
}, {
    name: 'алфавиту',
    type: 'name',
    order: 'asc'
}]

const Home: React.FC<HomePropsType> = (props) => {
    // const {items} = props;
    const items = useSelector<AppRootStateType, PizzaType[]>(state => state.pizzas.items);
    const isLoaded = useSelector<AppRootStateType, boolean>(state => state.pizzas.isLoaded);
    const category = useSelector<AppRootStateType, number | null>(state => state.filters.category);
    const sortType = useSelector<AppRootStateType, any>(state => state.filters.sortBy);
    const cartItems = useSelector<AppRootStateType, any>(state => state.cart.items);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPizzas(category, sortType));
    }, [category, sortType])

    const onSelectCategory = useCallback((index: number | null) => {
        dispatch(setCategory(index));
    }, [])

    const onClickSortBy = (type: string) => {
        dispatch(setSortBy(type));
    }

    const onAddPizzaToCart = (obj: PizzaObjType) => {
        dispatch(setPizzaToCart(obj));
    }

    return <div className="container">
        <div className="content__top">
            <Categories items={categoryName}
                        onSelectCategory={onSelectCategory}
                        activeCategory={category}/>
            <SortPopup items={sortItems} activeSortType={sortType.type} onClickSortBy={onClickSortBy}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                items.map((item, i) => < PizzaBlock key={i} item={item} isLoaded={isLoaded}
                                                    onAddPizza={onAddPizzaToCart} itemPizza = {cartItems[item.id]}/>)
            }
        </div>
    </div>
}

export default Home;
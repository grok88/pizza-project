import React, {useCallback} from 'react';
import {Categories, PizzaBlock, SortPopup} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../redux/filters-reducer';
import {AppRootStateType} from '../../redux/store';

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
const sortItems = [{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {
    name: 'алфавиту',
    type: 'alphobet'
}]

const Home: React.FC<HomePropsType> = (props) => {
    // const {items} = props;
    const items = useSelector<AppRootStateType, PizzaType[]>(state => state.pizzas.items);
    const dispatch = useDispatch();

    console.log(items)

    const onSelectCategory = useCallback((index: number) => {
        dispatch(setCategory(index));
    }, [])

    return <div className="container">
        <div className="content__top">
            <Categories items={categoryName}
                        onSelectCategory={onSelectCategory}/>
            <SortPopup items={sortItems}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                items.map((item, i) => < PizzaBlock key={i} item={item}/>)
            }
        </div>
    </div>
}

export default Home;
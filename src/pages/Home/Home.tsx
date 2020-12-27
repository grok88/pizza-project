import React from 'react';
import {Categories, PizzaBlock, SortPopup} from '../../components';

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
    items: PizzaType[];
}

const Home: React.FC<HomePropsType> = (props) => {
    const {items} = props;
    return <div className="container">
        <div className="content__top">
            <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
            <SortPopup items={[{name:'популярности', type:'popular'}, {name:'цене', type:'price'},{name:'алфавиту', type:'alphobet'} ]}/>
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
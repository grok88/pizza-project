import React, {useCallback, useState} from 'react';
import {PizzaType} from '../../pages/Home/Home';
import classNames from 'classnames';
import {PizzaLoader} from './pizza-loader/Pizza-loader';
import Button from '../button/Button';

type PizzaBlockPropsType = {
    item: PizzaType
    isLoaded: boolean
    onAddPizza: (item: any) => void
    itemPizza: {
        items: PizzaObjType[]
        totalPrize: number
    }
}
export type PizzaObjType = {
    id: number
    imageUrl: string
    name: string
    price: number
    size: number
    type: number
}

const PizzaBlock: React.FC<PizzaBlockPropsType> = (props) => {
    const {item: {imageUrl, name, price, types = [], sizes = [], id}, isLoaded, onAddPizza, itemPizza} = props;

    const availableTypes = ['тонкое', 'традиционное'];
    const [activeType, setActiveType] = useState(types[0])
    const onSelectedType = (i: number) => {
        setActiveType(i)
    }

    const availableSizes = [26, 30, 40];
    const [activeSize, setActiveSize] = useState(0)
    const onSelectedSize = (i: number) => {
        setActiveSize(i)
    }

    const onAddHandlePizza = useCallback(() => {
        const obj: PizzaObjType = {
            id,
            name,
            imageUrl,
            price,
            size: activeSize,
            type: activeType
        }
        onAddPizza(obj)
    }, [])

    if (isLoaded) {
        return <PizzaLoader/>
    }

    return <div className="pizza-block">
        <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
            <ul>
                {
                    availableTypes.map((type, i) => <li key={i} onClick={() => onSelectedType(i)}
                                                        className={classNames({
                                                            active: activeType === i,
                                                            disabled: !types.includes(i)
                                                        })}>{type}</li>)
                }
            </ul>
            <ul>
                {
                    availableSizes.map((size, i) => <li key={i} onClick={() => onSelectedSize(i)}
                                                        className={classNames({
                                                            active: activeSize === i,
                                                            disabled: !sizes.includes(size)
                                                        })}>{size} см.</li>)
                }
            </ul>
        </div>
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <Button onClickHandler={onAddHandlePizza} className="button--add" outline>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                    />
                </svg>
                <span>Добавить</span>
                {itemPizza && <i>{itemPizza.items.length}</i>}
            </Button>
        </div>
    </div>
}

export default PizzaBlock;


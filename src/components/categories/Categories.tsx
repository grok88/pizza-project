import React, {useState} from 'react';

type CategoriesPropsType = {
    items: string[]
    onSelectCategory: (index: number | null) => void
    activeCategory: null | number
}
const Categories: React.FC<CategoriesPropsType> = React.memo((props) => {
    const {items, onSelectCategory, activeCategory} = props;

    return <div className="categories">
        <ul>
            <li onClick={() => onSelectCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
            {items.map((item, i) => <li key={i} onClick={() => onSelectCategory(i)}
                                        className={activeCategory === i ? 'active' : ''}>{item}</li>)}
        </ul>
    </div>
})

//class
// interface IState {
//
// }
// interface IProps {
//     items: string[]
// }
//
// class Categories extends React.Component<IProps, IState> {
//     state = {
//         activeItem: null
//     }
//
//     onSelectedItem = (index: number) => {
//         this.setState({
//             activeItem: index
//         })
//     }
//
//     render() {
//         const {items} = this.props;
//
//         return <div className="categories">
//             <ul>
//                 <li className="active">Все</li>
//                 {items.map((item, i) => <li key={i} onClick={() => this.onSelectedItem(i)}
//                                             className={this.state.activeItem === i ? 'active' : ''}>{item}</li>)}
//             </ul>
//         </div>
//     }
// }

export default Categories;
import React, {useState} from 'react';

type CategoriesPropsType = {
    items: string[]
    onSelectCategory:(index:number) => void
}
const Categories: React.FC<CategoriesPropsType> = React.memo((props) => {
    const {items,onSelectCategory} = props;
    const [activeItem, setActiveItem] = useState<null | number>(null)

    const onSelectItem = (i: number) => {
        setActiveItem(i);
        onSelectCategory(i);
    }

    return <div className="categories">
        <ul>
            <li onClick={() => setActiveItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
            {items.map((item, i) => <li key={i} onClick={() => onSelectItem(i)}
                                        className={activeItem === i ? 'active' : ''}>{item}</li>)}
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
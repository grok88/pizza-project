import classNames from 'classnames';
import React from 'react';

interface IState {

}

interface IProps {
    outline?: boolean
}

// class Button extends React.Component<IProps, IState> {
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
//
//     render() {
//         return <button className={classNames('button', {
//             'button--outline': this.props.outline
//         })}>{this.props.children}</button>
//     }
// }
type ButtonPropsType = {
    outline?: boolean
}
const Button: React.FC<ButtonPropsType> = React.memo((props) => {
    return <button className={classNames('button', {
        'button--outline': props.outline
    })}>{props.children}</button>
})

export default Button;
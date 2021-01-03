import classNames from 'classnames';
import React from 'react';

// interface IState {
//
// }
//
// interface IProps {
//     outline?: boolean
//     className:string
// }

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
    className:string
    onClickHandler?:() => void
}
const Button: React.FC<ButtonPropsType> = React.memo((props) => {
    const {outline,className,onClickHandler} = props;
    return <button onClick={onClickHandler} className={classNames('button',className, {
        'button--outline': outline
    })}>{props.children}</button>
})

export default Button;
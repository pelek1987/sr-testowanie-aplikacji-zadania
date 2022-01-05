import {useState, useReducer, useEffect} from "react";
import Display from "../Display";
// import CounterButton from "../CounterButton";
import Input from "../Input";
import DumbButton from "../DumbButton";

const actions = {
    SET_NEW: "SET_NEW",
    INC: 'INCREMENT',
    DEC: 'DECREMENT',
    RESET: 'RESET'
}

function init(initialValue) {
    return ({
        count: initialValue
    })
}

function counterReducer(state, action) {

    switch (action.type) {
        case actions.SET_NEW:
            return {count: action.payload};
        case actions.INC:
            return {count: state.count + action.payload};
        case actions.DEC:
            return {count: state.count - action.payload};
        case actions.RESET:
            return init(action.payload);
        default:
            return state;
    }
}

function Counter({start = 0}) {
    const [inputValue, setInputValue] = useState('');

    useEffect(()=> {
        dispatch({type: actions.SET_NEW, payload: start})
    }, [start])

    const [counterState, dispatch] = useReducer(counterReducer, start, init);

    const handleInputChange = ({ target: { value }}) => {
        setInputValue(value);
    }

    const handleSetNewCounter = () => {
        dispatch({
            type: actions.SET_NEW,
            payload: Number(inputValue)
        });
        setInputValue('');
    }

    return (
        <div>
            <Display value={counterState.count} />
            <DumbButton label='+' onClick={() => dispatch({type: actions.INC, payload: 1})} />
            <DumbButton label='Reset' onClick={() => dispatch({type: actions.RESET, payload: start})} />
            <DumbButton label='-' onClick={() => dispatch({type: actions.DEC, payload: 1})} />
            <Input
                id="counterValue"
                value={inputValue}
                onChange={handleInputChange}
            />
            <DumbButton label="Zmień" onClick={handleSetNewCounter} />
        </div>
    );
}

export default Counter;

// class Counter extends React.Component {
//
//     static defaultProps = {
//         start: 0
//     }
//     static Display = Display;
//     static Button = CounterButton;
//     static Input = Input;
//     static DumbButton = DumbButton;
//
//
//     state = {
//         counter: 0,
//         inputValue: ''
//     }
//
//     componentDidMount() {
//         const { start } = this.props;
//
//         this.setState({
//             counter: start
//         })
//
//     }
//
//     handleCounterChange = (actionType, payload) => {
//         const { start } = this.props;
//         switch(actionType) {
//             case 'increment':
//                 this.setState(prevState => ({
//                     counter: prevState.counter + payload
//                 }))
//                 break;
//             case 'decrement':
//                 this.setState(prevState => ({
//                     counter: prevState.counter - payload
//                 }))
//                 break;
//             case 'reset':
//                 this.setState({
//                     counter: start
//                 })
//                 break;
//             default:
//                 throw new Error('Something goes wrong!')
//         }
//     }
//
//     handleInputChange = (e) => {
//         this.setState({
//             inputValue: e.target.value
//         })
//     }
//
//     handleSetNewCounter = () => {
//         const { inputValue } = this.state;
//         this.setState({
//             counter: Number(inputValue),
//             inputValue: ''
//         })
//     }
//
//     render() {
//         const { children } = this.props;
//         const { inputValue, counter } = this.state;
//         return (
//             <div>
//                 {
//                     React.Children.map(children, child => {
//
//                         const displayName = child.type.displayName;
//
//                         if(displayName === 'Display') {
//                             return React.cloneElement(child, { value: counter });
//                         }
//
//                         if(displayName === 'CounterButton') {
//                             return React.cloneElement(child, {
//                                 payload: 1,
//                                 handleCounterChange: this.handleCounterChange
//                             })
//                         }
//
//                         if(displayName === 'Input') {
//                             return React.cloneElement(child, {
//                                 id: "counterValue",
//                                 value: inputValue,
//                                 onChange: this.handleInputChange
//                             })
//                         }
//
//                         if(displayName === 'DumbButton') {
//                             return React.cloneElement(child, {
//                                 label: 'Zmień',
//                                 onClick: this.handleSetNewCounter
//                             })
//                         }
//                     })
//                 }
//             </div>
//         );
//     }
//
// }

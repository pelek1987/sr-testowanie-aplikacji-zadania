import React from 'react';
import Display from "../Display";
import CounterButton from "../CounterButton";
import Input from "../Input";
import DumbButton from "../DumbButton";

class Counter extends React.Component {

    static Display = Display;
    static Button = CounterButton;
    static Input = Input;
    static DumbButton = DumbButton;


    state = {
        counter: 0,
        inputValue: ''
    }

    componentDidMount() {
        const { start } = this.props;

        this.setState({
            counter: start
        })

    }

    handleCounterChange = (actionType, payload) => {
        const { start } = this.props;
        switch(actionType) {
            case 'increment':
                this.setState(prevState => ({
                    counter: prevState.counter + payload
                }))
                break;
            case 'decrement':
                this.setState(prevState => ({
                    counter: prevState.counter - payload
                }))
                break;
            case 'reset':
                this.setState({
                    counter: start
                })
                break;
            default:
                throw new Error('Something goes wrong!')
        }
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSetNewCounter = () => {
        const { inputValue } = this.state;
        this.setState({
            counter: Number(inputValue),
            inputValue: ''
        })
    }

    render() {
        const { children } = this.props;
        const { inputValue, counter } = this.state;
        return (
            <div>
                {
                    React.Children.map(children, child => {

                        const displayName = child.type.displayName;

                        if(displayName === 'Display') {
                            return React.cloneElement(child, { value: counter });
                        }

                        if(displayName === 'CounterButton') {
                            return React.cloneElement(child, {
                                payload: 1,
                                handleCounterChange: this.handleCounterChange
                            })
                        }

                        if(displayName === 'Input') {
                            return React.cloneElement(child, {
                                id: "counterValue",
                                value: inputValue,
                                onChange: this.handleInputChange
                            })
                        }

                        if(displayName === 'DumbButton') {
                            return React.cloneElement(child, {
                                label: 'Zmień',
                                onClick: this.handleSetNewCounter
                            })
                        }
                    })
                }
            </div>
        );
    }

}

export default Counter;

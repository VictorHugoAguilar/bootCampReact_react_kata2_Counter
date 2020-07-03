import React, { useState } from 'react';

// Clsas Component
/*
class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            counter : this.props.initialValue
        };
    }

    render() {
        return (
            <div>
               <div>{this.state.counter}</div>
                <button onClick={()=>this.decremeto()}>Decremento - - </button>
                <button onClick={ () => this.incremento()} >Incremento + + </button>
            </div>

        )
    }

    incremento() {
        this.setState({ counter: this.state.counter + this.props.step });
    }

    decremeto( ) {
        if(this.state.counter > 0){
            this.setState({ counter: this.state.counter - this.props.step  >= 0 ? this.state.counter - this.props.step : this.state.counter});
        }
    }
}
*/


// Component Function
const Counter = props => {

    const [counter, setCounter] = useState(props.initialValue);
 
    const incremento = () => {
        setCounter(counter + props.step);
    }

    const decremeto = () => {
        if (counter > 0) {
            setCounter(counter - props.step >= 0 ? counter - props.step : counter);
        }
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={decremeto}>Decremento - - </button>
            <button onClick={incremento} >Incremento + + </button>
        </div>

    )
}

export default Counter;
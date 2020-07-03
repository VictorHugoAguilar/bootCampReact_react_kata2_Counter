import React, { Component } from 'react';

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

export default Counter;
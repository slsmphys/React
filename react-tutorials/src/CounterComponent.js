import React from 'react';

class CounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        }
    }
    update(event) {
        this.setState({val: event.target.value})
    }
    render() {
        return (
            <div>
                <input type="number" onChange = {this.update.bind(this)} />
                <p>{this.state.val}</p>
            </div>
        )
    }
}

export default CounterComponent

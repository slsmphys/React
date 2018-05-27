import React from 'react';

class Component extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: "Some default value waiting to be updated"
        }
    }
    update(event) {
        this.setState({txt: event.target.value})
    }
    render() {
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <ChildComponent update = {this.update.bind(this)} />
            </div>
        )
    }
}

const ChildComponent = (props) =>
    <input type="text" onChange = {props.update} />

export default Component

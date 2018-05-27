import React from 'react';

class GreetingComponent extends React.Component {
    render() {
        let name = "slsmphys";
        return (
            <h1>Hello {name}</h1>
        );
    }
}

export default GreetingComponent

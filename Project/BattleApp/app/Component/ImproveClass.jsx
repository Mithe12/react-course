import * as React from 'react';
import PropTypes from "prop-types";

class PlayerOne extends React.Component {

    // we need to define constructor for defining the state
    // we need to bind any method below in constructor if needed

    constructor(props){
        super(props);

        this.state = {
            name: "",
        }

        this.updateName = this.updateName.bind(this);
    }

    // define the method
    updateName(name){
        this.setState({name});
    }
    render();
}

// we need to define type check
PlayerOne.propType = {
    name: PropTypes.string.isRequired
}

// we need to default values 
PlayerOne.defaultProps = {
    name: "M"
}

// How we can improve the code reability
// Use Class Fields to define the state wihtout constructor
// Use Arrow Function instead of binding to this.
// Define propTypes and defaultProps as static method

class PlayerTwo extends React.Component {

    static propTypes ={
        name: PropTypes.string.isRequired
    }

    static defaultProps = {
        name: "M"
    }

    state = {
        name: "",
    }

    // define the method as arrow
    updateName = (name) => this.setState({name});
    render();
}

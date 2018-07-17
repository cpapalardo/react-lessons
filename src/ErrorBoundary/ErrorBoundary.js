import React, { Component } from 'react';

//this is a higher order component, which simply wraps a component
//with the goal of handling any errors that component might throw

class errorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) =>{
        this.setState({hasError: true, errorMessage: error});
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            //whatever is a child of ErrorBoundary
            return this.props.children;
        }
    }
}

export default errorBoundary;
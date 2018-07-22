
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/AuxComponent';
import withClass from '../../../hoc/withClass';


//function names are often lower case
class Person extends Component {

    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor', props);    
      }
    
      UNSAFE_componentWillMount (){
        console.log('[Person.js] Inside componentWillMount');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount');
        if(this.props.position === 0)
        {
            this.inputElement.focus();
        }
      }

    render(){
        console.log('[Person.js] Inside render');

        //ref is only available in React Components, 
        //usually used for controlling focus, never to style or display
        return <Aux>
            <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
            ref={(input) => { this.inputElement = input}}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>
        </Aux>

        // return [
        //     <p key='1'  onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key='2' >{this.props.children}</p>,
        //     <input key='3' type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    children: PropTypes.element
};

export default withClass(Person, classes.Person);
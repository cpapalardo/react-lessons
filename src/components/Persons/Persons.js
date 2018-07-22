
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

//function names are often lower case
class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor', props);    
      }
    
      UNSAFE_componentWillMount (){
        console.log('[Persons.js] Inside componentWillMount');
      }
    
      componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount');
      }

      UNSAFE_componentWillReceiveProps(nextProps){
        console.log('[Persons.js] Inside UNSAFE_componentWillReceiveProps', nextProps);
      }

    //   shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] Inside shouldComponentUpdate', nextProps, nextState);

    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;        
    //   }

      UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log('[Persons.js] Inside UNSAFE_componentWillUpdate', nextProps, nextState);
      }

    render(){
        console.log('[Persons.js] Inside render');

        return this.props.persons.map((person, index)  => {
            return <Person 
            click={() => this.props.clicked(index)}
            name={person.name} 
            position={index}
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)}
            key={person.id}/>            
          });
    }
}

Persons.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.object),
    clicked: PropTypes.func,
    changed: PropTypes.func,
}

export default Persons;
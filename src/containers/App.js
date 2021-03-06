import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/AuxComponent';
//importing a function
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);  
    this.state = {
      persons: [
        {id: 1, name: 'Max', age: 28},
        {id: 2, name: 'Manu', age: 29},
        {id: 3, name: 'Stephanie', age: 26},
      ],    
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }  
  }

  UNSAFE_componentWillMount (){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] Inside componentDidUpdate');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[App.js] Inside shouldComponentUpdate', nextProps, nextState);

  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log('[App.js] Inside UNSAFE_componentWillUpdate', nextProps, nextState);
  }


  static getDerivedStateFromProps(nextProps, previousState){
    console.log(
      '[App.js] Inside UNSAFE_componentWillUpdate', 
      nextProps, 
      previousState
    );
    return previousState;
  }

  //snapshot of dom before it changes
  getSnapshotBeforeUpdate(){
    console.log(
      '[App.js] Inside getSnapshotBeforeUpdate',
    );
  }

  //handler indicates this is a 
  //method your are not activelly calling
  //but you are assigning as an event handler
  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons:[
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27},
    ]})
  }

  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //distributes all the properties of the objected we fetched into the new object
    const person = {
      ...this.state.persons[personIndex]
    }
    
    //alternative to the above code for copying the object 
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  //slice without parameters copies the array
  //or use es6 operator spread inside of brackets, indicating copying list to new array
  //you should aways update states in an immutable fashion
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // eslint-disable-next-line
    this.setState( (previousState, props) => {
      return {showPersons: !doesShow, 
        toggleClicked: previousState.toggleClicked + 1}
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  //don't add parentheses to function on click
  //button onClick example can be ineficcient. Use bind whenever possible
  render() {
    console.log("[App.js] inside render");

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }

    //providing authenticated to all child components in AuthContext

    return (
      <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonsHandler}/>
            <AuthContext.Provider value={this.state.authenticated}>
              {persons}
            </AuthContext.Provider>
      </Aux>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};

export default withClass(App, classes.App);

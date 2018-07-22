import React, { Component } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 29},
      {id: 3, name: 'Stephanie', age: 26},
    ],    
    showPersons: false,
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
    this.setState({showPersons: !doesShow});
  }

  //don't add parentheses to function on click
  //button onClick example can be ineficcient. Use bind whenever possible
  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
            {persons}

        </div>     
    );
  }
}
export default App;

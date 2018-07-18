import React, { Component } from 'react';
import classes from  './App.css';
import Person from '../components/Persons/Person/Person';

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
    let buttonClass = '';
    {
//      maps elements in a given array into something else
    }
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)  => {
            return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}/>            
          })}
      </div>       
      );

      buttonClass = classes.Red;
    }

    const assignedClasses = []; //= ['red', 'bold'].join(' ');

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);      
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>{"Hi! I'm a react app!"}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>        
          <button className={buttonClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>

            {persons}

        </div>     
    );
  }
}
//higher order component
export default App;
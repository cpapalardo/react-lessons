import React, {Fragment} from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/AuxComponent';

const cockpit = (props) => {

    const assignedClasses = []; //= ['red', 'bold'].join(' ');

    let buttonClass = classes.Button;

    if(props.showPersons)
    {
        buttonClass = [classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);      
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
    <Fragment>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>        
        <button className={buttonClass}
        onClick={props.clicked}>Toggle Persons</button>
    </Fragment>
    );
};

export default cockpit;
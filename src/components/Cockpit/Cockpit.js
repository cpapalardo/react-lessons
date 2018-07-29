import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Cockpit.css';

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

        <button onClick={props.login}>Log in</button>

    </Fragment>
    );
};

cockpit.propTypes = {
    showPersons: PropTypes.bool,
    persons: PropTypes.arrayOf(PropTypes.object),
    clicked: PropTypes.func,
    changed: PropTypes.func,
    appTitle: PropTypes.string
};

export default cockpit;
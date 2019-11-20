import React from 'react';
import  './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            backgroundColor: '#ccc'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Hi! My name is {props.name}. I'm a freak! and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default Radium(Person);

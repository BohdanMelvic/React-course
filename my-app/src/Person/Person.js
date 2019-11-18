import React from 'react';
import  './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hi! My name is {props.name}. I'm a freak! and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default Person;

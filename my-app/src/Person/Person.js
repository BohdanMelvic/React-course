import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>Hi! My name is {props.name}. I'm a freak! and I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;

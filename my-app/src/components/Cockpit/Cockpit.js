import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const styleBtn = {
        backgroundColor: 'yellowgreen',
        color: 'white',
        font: 'inherit',
        padding: '8px',
        ':hover': {
          transform: 'scale(1.1)'
        }
    };

    let classes = ['red', 'bold'].join(' ');

    if (props.showPersons) {
        styleBtn.backgroundColor ='red';
    }

    return (
    <div>
        <h1 className={classes}>{props.title}</h1>
        <button style={styleBtn} onClick={ () => props.clicked()}>Switch me!</button>
    </div>
    );
}

export default cockpit;
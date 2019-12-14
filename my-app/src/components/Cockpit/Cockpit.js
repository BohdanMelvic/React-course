import React, {useEffect} from 'react';
import './Cockpit.css';

export default function Cockpit(props) {
    useEffect( () => {
        console.log('Cockpit.js: useEffect');

        setTimeout(() => {alert("saved to cloud")}, 1000)
    }, [props.persons]);

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


import React, {useEffect} from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
    useEffect( () => {
        console.log('Cockpit.js: useEffect');

        const timer = setTimeout(() => {alert("saved to cloud")}, 1000);

        return () => {
            clearTimeout(timer);
            console.log('Cockpit.js: Cleanup work in useEfect');
        }
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

export default React.memo(Cockpit)

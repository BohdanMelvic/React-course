import React, {useEffect, useRef, useContext} from 'react';
import './Cockpit.css';
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
    useEffect( () => {                         // analog componentDidMount in classes
        console.log('Cockpit.js: useEffect');

        //const timer = setTimeout(() => {alert("saved to cloud")}, 1000);

        toggleBtnRef.current.click();

        return () => {
            //clearTimeout(timer);
            console.log('Cockpit.js: Cleanup work in useEfect');
        }
    }, [props.persons]);

    const toggleBtnRef = useRef(null); // analog ref in classes

    const authContext = useContext(AuthContext); // analog static contextType in classes
 
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
        <button 
            style={styleBtn} 
            onClick={ () => props.clicked() }
            ref={toggleBtnRef}
        >
            Switch me!
        </button>
        {/* <AuthContext.Consumer>
            { (context) => <button onClick={context.login}>Log In</button> }
        </AuthContext.Consumer> */}
        <button onClick={authContext.login}>Log In</button>
    </div>
    );
}

export default React.memo(Cockpit)

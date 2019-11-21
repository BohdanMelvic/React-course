import React, { useState } from 'react';
import  './AssigmentSolution.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

function AssigmentSolutionModule1() {
    const [personState, setPerson] = useState( {
        persons: [
            { username: 'Cesar'},
            { username: 'Napoleon'}
        ]
    });

    const usernameChangedHandler = (event) => {
        setPerson({
            persons: [
                { username: event.target.value},
                { username: event.target.value}
            ]
        });
    }

    return (
    <div className="AssigmentSolutionModule1">
       <UserInput changed={usernameChangedHandler} currentName={personState.persons[0].username}/>
       <UserOutput userMame={personState.persons[0].username}/>
       <UserOutput userMame={personState.persons[1].username}/>
    </div>
    );
}

export default AssigmentSolutionModule1;
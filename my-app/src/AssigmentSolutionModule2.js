import React, { useState } from 'react';
import  './AssigmentSolution.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './Char/Char'

function AssigmentSolutionModule2() {
    const [userInputState, setUserInputState]= useState({
        userInput: ''
    });

    const inputChangeNameHandler = (event) => {
        setUserInputState({userInput: event.target.value})
    }

    const deleteCharHandler = (index) => {
        const text = userInputState.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        setUserInputState({userInput: updatedText});
    }

    const charList = userInputState.userInput.split('').map( 
            (ch, index) => <Char character={ch} key={index} clicked={ () => deleteCharHandler(index) }/>
        );

    return (
        <div className="AssigmentSolutionModule2">
            <input type="text" onChange={inputChangeNameHandler}/>
            <p>{userInputState.userInput}</p>
            <Validation inputLength={userInputState.userInput.length}/>
            {charList}
        </div>
    )
}

export default AssigmentSolutionModule2;
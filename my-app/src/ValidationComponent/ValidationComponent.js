import React from 'react';

const Validation = (props) => {

    let warnMessage = '';
    if (props.inputLength > 5 ) {
        warnMessage = 'Too long';
    } else if (props.inputLength < 2 ) {
        warnMessage = 'Too short';
    } else {
        warnMessage = 'Very Goodaa';
    }
    
    return(
        <div>
            <p>Input Length: {props.inputLength}</p>
            <p>{warnMessage}</p>
        </div>
    )
}

export default Validation;
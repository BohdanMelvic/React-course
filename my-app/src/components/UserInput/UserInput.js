import React from 'react';

const UserInput = (props) => {
    const style = {
        border: '2px solid red'
    }

    return (
        <input type="text" 
        onChange={props.changed} 
        placeholder={props.currentName}
        style={style}/>
    );
};

export default UserInput;

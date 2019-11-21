import React from 'react';

const UserOutput = (props) => {
    const style = {
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign:' center'
    }

    return (
        <div style={style}>
            <p> Username: {props.userMame}</p>
            <p>This text must be overwritten!</p>
        </div>
    );
};

export default UserOutput;

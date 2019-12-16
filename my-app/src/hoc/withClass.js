import React from 'react';

const WithClass = (WrappendComponent, className) => {
    return props => (
        <div className={className}>
            <WrappendComponent {...props}/>
        </div>
    )
};

export default WithClass;
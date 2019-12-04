import React from 'react'
import './Button.css'

export default function Button(props) {
    const classes = [
        'Button',
        props.type
    ]
    return (
        <button 
            onClick={props.onClick}
            className={classes.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

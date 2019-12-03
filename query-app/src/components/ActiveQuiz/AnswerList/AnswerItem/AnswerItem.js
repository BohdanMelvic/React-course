import React from 'react'
import './AnswerItem.css'

export default function AnswerItem(props) {
    const cls = ['AnswerItem'];
    if (props.state) {
        cls.push(props.state);
    }
    
    return (
        <div >
            <li 
                className={cls.join(' ')} 
                onClick={props.clicked.bind(this, props.answer.id)}
            >
                {props.answer.text}
            </li>
        </div>
    )
}
import React from 'react'
import './AnswerItem.css'

export default function AnswerItem(props) {
    return (
        <div >
            <li className="AnswerItem">
                {props.answer.text}
            </li>
        </div>
    )
}

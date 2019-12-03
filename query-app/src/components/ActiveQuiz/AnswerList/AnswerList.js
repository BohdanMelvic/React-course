import React from 'react'
import './AnswerList.css'
import AnswerItem from './AnswerItem/AnswerItem'

export default function AnswerList(props) {
    return (
        <ul className="AnswerList">
            {props.answers.map( (answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        clicked={props.clicked}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>
    )
}

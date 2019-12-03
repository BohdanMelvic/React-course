import React from 'react'
import './ActiveQuiz.css'
import AnswerList from './AnswerList/AnswerList'

export default function ActiveQuiz(props) {
    return (
        <div className="ActiveQuiz">
            <p className="Question">
                <span>
                    <strong>2. </strong>
                    How are you?
                </span>
                <small>4 / 5</small>
            </p>

            <AnswerList 
                answers={props.answers}
            />
        </div>
    )
}


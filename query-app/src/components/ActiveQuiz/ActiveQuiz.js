import React, { Component } from 'react'
import './ActiveQuiz.css'

export class ActiveQuiz extends Component {
    render() {
        return (
            <div className="ActiveQuiz">
                <p className="Question">
                    <span>
                        <strong>2. </strong>
                        How are you?
                    </span>
                    <small>4 / 5</small>
                </p>

                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>

                </ul>
            </div>
        )
    }
}

export default ActiveQuiz

import React, { Component } from 'react'
import './QuizList.css'
import {NavLink} from 'react-router-dom'

export class QuizList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    renderQuizes = () => {
        return [1, 2, 3].map( (quiz, index) => {
            return (
                <li
                    key={index}
                > 
                    <NavLink 
                        to={'quiz/' + quiz}
                    > 
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }
    
    render() {
        return (
            <div className='QuizList'>
               <div>
               <h1>Test List</h1>

                <ul>
                    {this.renderQuizes()}
                </ul>
               </div>
            </div>
        )
    }
}

export default QuizList
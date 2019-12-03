import React, { Component } from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeQuestion: 0,
             answerState: null,
             quiz: [
                 {
                    question: 'What is the capital of Zimbabwe?',
                    rightAnswerId: 2,
                    answers: [
                       {text: "Kyiv", id: 1},
                       {text: "Harare", id: 2},
                       {text: "London", id: 3},
                       {text: "Reykjavik", id: 4}
                   ]  
                 },
                 {
                    question: 'What is the highest mountain?',
                    rightAnswerId: 1,
                    answers: [
                       {text: "Mount Everest", id: 1},
                       {text: "Kilimanjaro", id: 2},
                       {text: "McKinley", id: 3},
                       {text: "Elbrus", id: 4}
                   ]  
                 },
                 {
                    question: 'What is the longest river?',
                    rightAnswerId: 4,
                    answers: [
                       {text: "Amazon River", id: 1},
                       {text: "Dnipro", id: 2},
                       {text: "Volga", id: 3},
                       {text: "Nile", id: 4}
                   ]  
                 }
             ]
        }
    }

    answerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            });

            const timeout = window.setTimeout( () => {
                if ( this.state.activeQuestion + 1 === this.state.quiz.length) {
                    alert('Finished');
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }

                window.clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }
    
    render() {
        return (
            <div className="Quiz">
               <div className="QuizWrapper">
                <h1>Answer all questions:</h1>

                <ActiveQuiz 
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    clicked={this.answerClickHandler}
                    quizLength={this.state.quiz.length}
                    questionNumber={this.state.activeQuestion + 1}
                    state={this.state.answerState}
                />
               </div>
            </div>
        )
    }
}

export default Quiz

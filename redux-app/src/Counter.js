import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeCountF} from './redux/actions/actions'

export class Counter extends Component {
    render() {
        return (
            <div style={{padding: '20px', border: '1px solid black'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={() => this.props.changeCount(3)}>Add 3</button>
                    <button onClick={() => this.props.changeCount(-3)}>Sub 3</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { counter: state.counter2.counter2 }
}

function mapDispatchToProps(dispatch) {
    return {
        changeCount: (number) => dispatch(changeCountF(number)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

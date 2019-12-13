import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter'
import {add, sub, asyncAdd} from './redux/actions/actions'
import { number } from 'prop-types'


class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={() => this.props.onAdd(1)}>Add 1</button>
          <button onClick={() => this.props.onSub(1)}>Subtract 1</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAdd(5)}>Add 5</button>
          <button onClick={() => this.props.onSub(5)}>Subtract 5</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>Async add 100</button>
        </div>

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (number) => dispatch(add(number)),
    onSub: (number) => dispatch(sub(number)),
    onAsyncAdd: (number) => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

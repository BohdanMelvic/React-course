import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {

  updateCounter(value) {
    this.setState({
      counter: this.props.counter + value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className={'App'}>
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={() => this.props.onAdd(1)}>Add 1</button>
          <button onClick={() => this.props.onSub(-1)}>Subtract 1</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

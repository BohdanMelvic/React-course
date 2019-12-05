import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetails from './CarDetails/CarDetails'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  

  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="wfm-active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: "/cars",
                search: '?a=1&b=2',
                hash: 'wfm-hash'
              }} exact>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <div style={{ textAlign: 'center'}}>
          <h3>LogIn status: {this.state.isLoggedIn ? 'true' : 'false'}</h3>
          <button onClick={() => this.setState({isLoggedIn: true})}>Log in</button>
        </div>

        <hr/>
        <Switch>
          <Route path='/' exact render={() => <h1>Home Page</h1> }/>
          {this.state.isLoggedIn ? <Route path="/about" component={About} /> : null}
          <Route path="/cars/:name" component={CarDetails} />
          <Route path="/cars" component={Cars} />
          {/* <Route render={() => <h1 style={{color:'red', textAlign: 'center'}}>Error 404 not found</h1>} /> */}
          <Redirect to={'/'}/>
        </Switch>
      </div>
    );
  }
}

export default App

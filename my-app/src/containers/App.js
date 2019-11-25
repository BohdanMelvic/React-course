import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons.js';
import Radium,  { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';

//{ useState } function App(props) {
//   const [personState, setPerson] = useState( {
//     persons: [
//       { name: 'Bohdan', age: 27},
//       { name: 'Ivan', age: 65}
//     ]
//   });

//   const [otherState, setotherState] = useState('bla-bla-bla');

//   const switchNameHandler = () => {
//     setPerson({persons:  [
//       { name: 'Petro', age: 30},
//       { name: 'Mike', age: 74}
//     ] });
//   }

//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <button onClick={switchNameHandler}>Switch me!</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}>Text outside</Person>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}>{otherState}</Person>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      {id: 'dfvew3', name: 'Bohdan', age: 27},
      {id: 'sadf3q', name: 'Ivan', age: 65},
      {id: 'asdf34', name: 'Petro', age: 16}
    ],
    otherState: 'bla-bla-bla',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({persons:  [
      { name: 'Petro', age: 30},
      { name: newName, age: 74}
      ] 
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( (p) => p.id === id);
    const person = { ...this.state.persons[personIndex] }; // the same like const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render () {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
       <StyleRoot>
        <div className="App">
          <Cockpit
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} 
            showPersons={this.state.showPersons}
          />
          {persons} 
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);

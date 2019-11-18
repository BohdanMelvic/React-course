import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

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
      { name: 'Bohdan', age: 27},
      { name: 'Ivan', age: 65},
      { name: 'Petro', age: 16}
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

  nameChangeHandler = (event) => {
    this.setState({persons:  [
      { name: event.target.value, age: 30},
      { name: 'Ivan', age: 74}
      ] 
    });
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
    const style = {
      backgroundColor: 'yellowgreen',
      font: 'inherit',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age}
                click={ () => this.deletePersonHandler(index)}
                changed={this.nameChangeHandler}>
              </Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button style={style} onClick={ () => this.togglePersonsHandler()}>Switch me!</button>
        {persons}

        {/* { this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Hui')}
                changed={this.nameChangeHandler}>
              
                Text outside
              </Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}>
                {this.state.otherState}
              </Person>
            </div> 
          : null
        } */}

      </div>
    )
  }
}

export default App;

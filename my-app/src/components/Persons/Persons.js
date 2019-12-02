 import React, {Component} from 'react'
 import Person from './Person/Person.js';
 //import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
 
 class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(previusProps, previusState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] rendring...');
    return this.props.persons.map( (person, index) => {
      return (
        <Person 
          key={index}
          name={person.name} 
          age={person.age}
          click={ () => this.props.clicked(index)}
          changed={ (event) => {  this.props.changed(event, person.id)} }
        />
      );
    });
  } 
};

 export default Persons;
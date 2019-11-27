 import React, {Component} from 'react'
 import Person from './Person/Person.js';
 import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
 
 class Persons extends Component {
  //  constructor(props) {
  //    super(props);
  //  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

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
        <ErrorBoundary>
        <Person 
          name={person.name} 
          age={person.age}
          click={ () => this.props.clicked(index)}
          changed={ (event) => {  this.props.changed(event, person.id)} }
          key={person.id}
        />
        </ErrorBoundary>
      );
    });
  } 
};

 export default Persons;
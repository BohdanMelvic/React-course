 import React, {Component, PureComponent} from 'react'
 import Person from './Person/Person.js';
 //import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
 
 class Persons extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons ||
        nextProps.clicked !== this.props.clicked || 
        nextProps.changed !== this.props.changed ) {
      return true
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(previusProps, previusState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
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
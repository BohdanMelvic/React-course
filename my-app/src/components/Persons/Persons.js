 import React from 'react'
 import Person from './Person/Person.js';
 import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
 
 const persons = (props) => {
  console.log('[Persons.js] rendring...');

  return props.persons.map( (person, index) => {
    return (
      <ErrorBoundary>
      <Person 
        name={person.name} 
        age={person.age}
        click={ () => props.clicked(index)}
        changed={ (event) => { props.changed(event, person.id)} }
        key={person.id}
      />
      </ErrorBoundary>
    );
  });
};

 export default persons;
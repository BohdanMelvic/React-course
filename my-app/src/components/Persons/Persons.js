 import React from 'react'
 import Person from './Person/Person.js';
 import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


 const persons = (props) => (
    props.persons.map( (person, index) => {
        return (
          <ErrorBoundary>
          <Person 
            name={person.name} 
            age={person.age}
            click={ () => props.clicked(index)}
            changed={ (event) => { props.changed(event, person.id)} }
            key={person.id}>
          </Person>
          </ErrorBoundary>
        );
      })
 );

 export default persons;
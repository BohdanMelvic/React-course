import React, {Component} from 'react';
import  './Person.css';
import Radium from 'radium';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                '@media (min-width: 500px)': {
                    backgroundColor: '#ccc'
                }
            }
        }
    }

    //const rnd = Math.random();

    // if (rnd > 0.7) {
    // throw new Error('some bullshit');
    // }

    render() {
        console.log('[Persons.js] rendring...');
        return (
            <div className="Person" style={this.state.style}>
                <p onClick={this.props.click}>Hi! My name is {this.props.name}. I'm a freak! and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}/>
            </div>
        )
    }
}

export default Radium(Person);

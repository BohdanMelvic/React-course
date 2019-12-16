import React, {Component} from 'react';
import  './Person.css';
import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';

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
            <Auxiliary>
            {/* <div className="Person" style={this.state.style}> */}
                <p onClick={this.props.click}>Hi! My name is {this.props.name}. I'm a freak! and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            {/* </div> */}
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Radium(Person), 'Person');

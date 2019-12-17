import React, {Component} from 'react';
import  './Person.css';
import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                '@media (min-width: 500px)': {
                    backgroundColor: '#ccc'
                }
            }
        };

        this.inputElemRef = React.createRef();
    }

    //const rnd = Math.random();

    // if (rnd > 0.7) {
    // throw new Error('some bullshit');
    // }

    static contextType = AuthContext; // the better way use CONTEXt

    componentDidMount() {
        this.inputElemRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Persons.js] rendring...');
        return (
            <Auxiliary>
            {/* <div className="Person" style={this.state.style}> */}
                {/* <AuthContext.Consumer>
                    { (context) =>{ return context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p>} }
                </AuthContext.Consumer> */}

                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p> }                
              
                <p onClick={this.props.click}>Hi! My name is {this.props.name}. I'm a freak! and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    ref={this.inputElemRef}
                />
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

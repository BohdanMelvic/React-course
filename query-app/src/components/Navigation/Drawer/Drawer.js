import React, { Component } from 'react'
import './Drawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Authorization', exact: false},
    {to: '/quiz-creator', label: 'Create the test', exact: false}
]

export class Drawer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
       return links.map( (link, index) => {
        return(
           <li key={index}>
            <NavLink 
                to={link.to}
                exact={link.exact}
                activeClassName='active'
                onClick={this.clickHandler}
            > 
                {link.label}
            </NavLink>
           </li>
        )
       });
    }
    
    render() {
        const classes = ['Drawer']

        if (!this.props.isOpen) {
            classes.push('close')
        }
        return (
            <React.Fragment>
                <nav className={classes.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
           </React.Fragment>
        )
    }
}

export default Drawer

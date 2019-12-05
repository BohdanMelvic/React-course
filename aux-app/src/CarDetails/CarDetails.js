import React, { Component } from 'react'
import './CarDetails.scss'

export class CarDetails extends Component {
    render() {
        return (
            <div className="CarDetails">
                <h1>{this.props.match.params.name}</h1>
            </div>
        )
    }
}

export default CarDetails

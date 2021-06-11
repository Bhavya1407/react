import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class H extends Component {
    static propTypes = {
        age:PropTypes.number
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
                
            </div>
        )
    }

   
}

export default H

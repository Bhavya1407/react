import React from 'react'
import PropTypes from 'prop-types'
function Child(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>i shuld not be string im expected to be integer {props.age}</h1>
        </div>
    )

    
}

//propsType is p issmall hear
Child.propTypes = {
age:PropTypes.number
}

export default Child;

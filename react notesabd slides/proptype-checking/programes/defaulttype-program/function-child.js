import React from 'react'
import PropTypes from 'prop-types'
function Child(props) {
    return (
        <form>
            <label for="text-form">type something</label>
            
            <input id="text-form" value={props.name} type="text"/>
            <h1>{props.name}</h1>
            <h1>i shuld not be string im expected to be integer {props.age}</h1>
        </form>
    )

    
}
Child.propTypes = {
age:PropTypes.number.isRequired

}
Child.defaultProps = {
    name:"hello",
    age:90
    }

export default Child;

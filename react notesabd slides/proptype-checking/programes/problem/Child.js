import React from 'react'

function Child(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>i shuld not be string im expected to be integer {props.age}</h1>
        </div>
    )
}

export default Child;

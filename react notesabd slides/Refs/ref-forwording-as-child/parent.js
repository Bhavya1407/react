import React, { Component } from 'react'
import FIRefs from './FIRefs'

export class FirParent extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }

    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FIRefs ref={this.inputRef}/>
                <button onClick={()=>{this.clickHandler()}}>click me</button>
            </div>
        )
    }
}

export default FirParent

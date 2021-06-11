import React,{Component}from 'react'
import Child from './Child'


export class Parent extends Component {
    
    render() {
        return (
            <div>
                <h1>im a parent component</h1>
                <h3>im a child <Child name={"salman"} age={"hero"}/></h3>
                {/* problem age should conatin integer but it shows string it accpts it */}
            </div>
        )
    }
}

export default Parent

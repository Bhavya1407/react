import React,{Component}from 'react'
import Child from './Child'
import H from './H'


export class Parent extends Component {
    
    render() {
        return (
            <div>
                <h1>im a parent component</h1>
                <h3>im a child <Child name={"salman"} age={78}/>
                </h3>
   //not calling with arguments default arguments applied
                <h3><Child /></h3>
                {/* problem age should conatin integer but it shows string it accpts it */}
                <H name={"salman"} age={"hero"}/>
                  
                  //not calling with arguments default arguments applied
                <H />
            </div>
        )
    }


    
}

export default Parent


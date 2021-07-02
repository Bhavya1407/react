import React, { Component } from 'react'

class Refss extends Component {
constructor(){
    super();
    this.userRef=React.createRef()
}

editval(){
    //it gives a null value
    console.log(this.userRef)
    //this.userRef.current.focus()
    this.userRef.current.value=1000;
}

 render() {
  return(
   <div>
<h1>
    hi ref example
</h1>
<center>
<input ref={this.userRef} type="text" name="user"/>

<button onClick={()=>{this.editval()}}>click me</button></center>
   </div>
    )
   }
 }



export default  Refss

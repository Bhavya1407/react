
import {useState} from 'react';
function Postcall() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");

function saveUsers() {
    // console.warn(name,email,address);
     let data={name,email,address}
    fetch('http://localhost:3000/users',{
        method:'post',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)

        
    }).then((result)=>{
        console.warn(result);
        result.json().then((resp)=>{
            console.warn(resp);

        })
    })
}


    return (
<>
<div  style={{backgroundColor: "red"}}>
<h1>this is home page </h1>
<input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
<input type="text" value={email} name="email"onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
<input type="text" value={address} name="address"onChange={(e)=>{setAddress(e.target.value)}}/><br/><br/>

<button type="button" onClick={saveUsers}>save new user</button>

 </div>
</>

    );
}
export default Postcall;

import {useState,useEffect} from 'react';
function Getcall() {
   
    const [data,setData]=useState([]);

 useEffect(()=>{

    fetch('http://localhost:3000/users').then((result)=>{
        
        result.json().then((resp)=>{
            // console.warn(resp);
            setData(resp)
        })
    })
},[]) 
console.warn(data);

    return (
<>

<h1>get api with fetch </h1>
<table border="1">
<tr>
    <td>ID</td>
    <td>NAME</td>
    <td>Email</td>
    <td>Address</td>
</tr>
{

    data.map((item)=>
<tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.address}</td>
</tr>
    )
} 
</table>

</>

    );
}
export default Getcall;

import {useState,useEffect} from 'react';
function Delitecall() {
   
    const [data,setData]=useState([]);

 useEffect(()=>{

    fetch('http://localhost:3000/users').then((result)=>{
        
        result.json().then((resp)=>{
           //  console.warn(resp);
            setData(resp)
        })
    })
},[]) 
function delit(id) {
     fetch(`http://localhost:3000/users/${id}`,{
        method:'DELETE',
    }
       ).then((result)=>{
      
         result.json().then((resp)=>{
           console.warn("heloo",resp,"im resp");
             setData()
             
        })
     })
    alert(id);
}

//console.warn(data);

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

    data.map((item,i)=>
<tr key={i}>

    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.address}</td>
    <td><button type="button" onClick={()=>delit(item.id)}>delite</button></td>
</tr>
    )
} 
</table>

</>

    );
}
export default Delitecall;
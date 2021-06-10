
import {useState} from 'react';
function Home() {
    const [data,setData]=useState({
        name:'hello',
        lastname:'waseem'
    })
    return (
<>
<div  style={{backgroundColor: "red"}}>
<h1>this is home page </h1>
<input type="text" value={data.name}onChange={(e)=>{setData({name:data.name,name:e.target.value})}}/>
 <h1>{data.name}</h1>
 </div>
</>

    );
}
export default Home;
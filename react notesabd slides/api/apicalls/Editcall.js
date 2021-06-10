
import { useState, useEffect } from 'react';

function Editcall() {

    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [simply, setSimply] = useState("");
    const [id, setId] = useState("");
    const [DD, setD] = useState();

    useEffect(() => {

       fetch('http://localhost:3000/users').then((result) => {

            result.json().then((resp) => {
                // console.warn(resp);
                setData(resp)
                // setName(resp[0].name)
                // setEmail(resp[0].email)
                // setAddress(resp[0].address)
                // setId(resp[0].id)
            })
        })
    },[])
    function delit(id) {
        fetch('http://localhost:3000/users/'+{id}, {
            method: 'delite',
        }
        ).then((result) => {

            result.json().then((resp) => {
                // console.warn(resp);
                setD(resp)
            })
        })
      //  alert(id);
    }

    function SelectUser(id) {
        console.log("im id ",data[id - 1])
        setName(data[id - 1].name)
        setEmail(data[id - 1].email)
        setAddress(data[id - 1].address)
       setId(data[id - 1].id)
    }
    function updatuser() {
        console.log("im don",id,name,email,address,)
         let item ={name,email,address,id};
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(item)
        }
        ).then((result) => {

            result.json().then((resp) => {
                 //console.warn(resp);
                 //setSimply(resp);
            })
        })
    }
    // console.warn(data);

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

                    data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                           
                            <td><button type="button" onClick={() => delit(item.id)}>delite</button></td>
                            <td><button type="button" onClick={() => SelectUser(item.id)}>update</button></td>
                        </tr>
                    )
                }
            </table>
            
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
           
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} /><br />
            <input type="submit" onClick={()=>{alert("kkk");updatuser()} } /><br />
            
        </>

    );
}
export default Editcall;
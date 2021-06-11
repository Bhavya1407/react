import { Firstname} from './ComA'
function ComC() {
    return (
        
        <>
        <Firstname.Consumer>
{(fname)=>{
    return <h1>my name is {fname}</h1>
}}

        </Firstname.Consumer>
        </>
        )
    
    }
    export default ComC;

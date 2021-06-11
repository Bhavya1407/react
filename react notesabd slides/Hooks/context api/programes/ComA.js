import { createContext } from "react";
import ComB from "./ComB";

const Firstname=createContext();
function ComA() {
return (<>
<Firstname.Provider value="gnu">
<ComB />

</Firstname.Provider>

</>
);

}
export default ComA;
export {Firstname};

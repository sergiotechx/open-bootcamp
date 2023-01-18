import { Contact } from "../Models/Contact.class"
import ComponentB from "./ComponentB"

const ComponentA = ()=>{
    const defaultContact = new Contact('Sergio','Martinez','elmacho@muymacho.com',false)
    return(
        <>
        <ComponentB contact ={defaultContact}/>
        </>
    )
}
export default ComponentA
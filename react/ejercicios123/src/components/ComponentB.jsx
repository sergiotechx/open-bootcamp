import { useState } from "react"
import PropTypes from 'prop-types'
import { Contact } from "../Models/Contact.class"
/*Componente B que es renderizado por componente A y cambia los estados de conectado*/
function ComponentB  ({contact}){
    /*por el DOM se necesita un estdao de conectado o no*/
     const[connected,setConnected]= useState(contact.connected)

    const changeLabel =()=>{
        /*se hace un switch del estado*/
        contact.connected = contact.connected?false:true;
        setConnected(contact.connected)
    }

    return(
        <div>
           <p> Name: {contact.name}</p>
           <p>Last name: {contact.lastName}</p>
           <p>Email: {contact.email}</p>
           <p>Connected:</p>
           <p> <button onClick={changeLabel}>{connected.toString()}</button></p>
        </div>
    )
}
ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentB
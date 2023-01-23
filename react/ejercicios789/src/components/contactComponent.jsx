import React from 'react';
const ContactComponent = ({contact,removeContact,updateConnectionStatus})=>{
    const boxStyle = {border: '2px solid white',  listStyleType:'square'}
   
    return(
        <div style={boxStyle}>
            <h3>{contact.fullName}</h3>
            <h4>{contact.email}</h4>
            <button  onClick={()=>removeContact(contact)} >Remove</button>
            <button  style={{  backgroundColor: contact.connected ? 'green' : 'red' }} 
                      onClick={()=>updateConnectionStatus(contact)} >
                     
               {contact.connected ? 'Connected' : 'Disconnected'}
            </button>
        </div>
    );

}
export default ContactComponent; 
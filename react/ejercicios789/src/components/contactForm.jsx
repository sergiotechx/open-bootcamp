import React, { useRef } from 'react';
const ContactForm = ({onAddContact})=>{
    const fullName = useRef('');
    const email = useRef('');
    
    function formAddContact(e){
        e.preventDefault(); 
        const newContact = { fullName: fullName.current.value, email: email.current.value, connected: false }; 
        onAddContact(newContact);
        fullName.current.value = '';
        email.current.value = '';
    }
    return(
        <form onSubmit={formAddContact}>
            <h3> Add Contact</h3>
            <input ref={fullName} name="fullName"placeholder="Full name"/>
            <input ref={email} name="email"placeholder="email"/>
            <button onClick={ formAddContact} type="submit" className="submit-button">
                Add contact
            </button>
        </form>
    )
}
export default ContactForm; 
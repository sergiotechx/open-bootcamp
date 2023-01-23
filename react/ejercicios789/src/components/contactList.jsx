import {useState} from 'react';
import ContactComponent from './contactComponent';
import ContactForm from './contactForm';

const ContactList = () =>{
    const initialContact =[
        { fullName: 'Juan Charrasquiado', email: 'JC@gmail.com', connected: false },
        { fullName: 'Juana la Loca', email: 'JLL@gmail.com', connected: false  },
    ];
    const [contacts, setContacts] = useState(initialContact);
 
 
   
    function addContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact)
        setContacts(tempContacts);
    }
   
    function removeContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }
   
    function updateConnectionStatus(contact) {
        const index = contacts.indexOf(contact);
        contacts[index].connected = contacts[index].connected?false:true;
        const tempContacts = [...contacts];
        setContacts(tempContacts);
    }

    return(
        <div>
        <h1>Contacts</h1>
        
        <div>{
        contacts.map((contact,index)=>{
          return(
            <ContactComponent key ={index} contact ={contact} removeContact ={removeContact} updateConnectionStatus={updateConnectionStatus}/>
            );
        })
        } </div>
        <div>
        <ContactForm onAddContact={addContact}></ContactForm>
        </div>
        </div>
    );
}
export default ContactList;
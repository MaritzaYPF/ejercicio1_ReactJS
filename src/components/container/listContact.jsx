import React from 'react';
import { Contacts } from '../../models/contact.class';
import { ESTADO } from '../../models/estado';
import ContactComponent from '../forms/contact';

const ContactListComponent = () => {

    const defaultContact = new Contacts('Mari','Fune','yamilethfunes098@gmail.com',ESTADO.conectado)

    return (
        <div>
             <div>
               <h2>Your Contact: </h2>
             </div>
             <ContactComponent contact={defaultContact}></ContactComponent>

        </div>
    );
};

export default ContactListComponent;

import React from 'react';
import PropTypes from 'prop-types';
import { Contacts } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
             <h3> Nombre: { contact.nombre } </h3>

             <h3> Apellido: { contact.apellido } </h3>

             <h3> Email: { contact.email } </h3>

             <h3> El estado es: { contact.estado ? 'Contacto en linea' : 'Contacto no disponible'} </h3>

        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacts)
};


export default ContactComponent;




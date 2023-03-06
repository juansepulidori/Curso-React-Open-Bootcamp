import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../container/componenteB';


const ContactoComponent = ({contacto}) => {
    
    return (
        <div>
            <h2>
                Nombre: {contacto.nombre}
            </h2>
            <h2>
                Apellido: {contacto.apellido}
            </h2>
            <h2>
                Email: {contacto.email}
            </h2>
            <ComponenteB contacto={contacto}></ComponenteB>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ContactoComponent;

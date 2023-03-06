import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto.component';


const ComponenteA = () => {
    const contacto = new Contacto("Juan Sebastián", "Pulidori", "juansepulidori@gmail.com");
    return (
        <div>
            <h1>--Contactos registrados--</h1>
            <ContactoComponent contacto={contacto}></ContactoComponent>
        </div>
    );
};


ComponenteA.propTypes = {

};


export default ComponenteA;

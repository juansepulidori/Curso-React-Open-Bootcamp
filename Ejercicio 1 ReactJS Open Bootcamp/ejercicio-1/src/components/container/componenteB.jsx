import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = () => {
    
    const [conectado, setestado] = useState(false);

    const CambiarEstadoConexion = () =>{
        if(conectado){
            setestado(false);
        }
        else{
            setestado(true);
        }
    }

    return (
        <div>
            <h2>
                {conectado ? 'Contacto En Línea':'Contacto No Disponible'}
            </h2>
            <button onClick={CambiarEstadoConexion}>Cambiar estado de conexion</button>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ComponenteB;

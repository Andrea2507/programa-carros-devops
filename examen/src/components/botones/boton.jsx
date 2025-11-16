import React from 'react';

function Boton({texto = " "}){
    return(
        <button
            type ="submit"
            className = 'btn btn-primary'
        > {texto}</button>
    );
}

export default Boton;
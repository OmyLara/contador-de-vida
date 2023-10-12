import React from 'react';
import '../Hojas de estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic,subir2 }){
  return(
    
       <button
      className={ esBotonDeClic ? 'boton-clic': 'boton-reiniciar' }
      onClick={ manejarClic } >
      {texto}
        </button>

      

  );
}

function Menos({ texto, menos }){
  return(
    
       <button
      className='Menos'
      onClick={ menos } >
      {texto}
    </button>

  );
}
export {Boton,Menos};
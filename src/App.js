import './App.css';
import {Boton,Menos} from './componentes/Boton.js';
import logoMarvelChampions from './imagenes/MClogo.jpeg'
import Contador from './componentes/Contador';

//Para poder empezar a usar estados vamos a importar los hooks necesarioscomo el siguiente:
import { useState } from 'react';

function App() {

  //para usar los hooks asignamos primero el estado y después la función que ayudará a llegar a ese estado, es este caso numClics es el estado del contador  y le decimos que mpiece desde 0 (lo que está después del '=' y la función setNumClics
const [numClics, setNumClics]= useState(0);
const[mostrar,setMostrar]= useState(false);

//PRIMER CONTADOR
  const manejarClic = () =>{
      setNumClics(numClics + 1);

  };

  const reiniciarContador = () =>{
    setNumClics(0);
};

  const menos = ()=> {
    if(numClics >0){
      setNumClics(numClics - 1);
    }
  }

  //SEGUNDO CONTADOR

  const[numClics2, setNumClics2]= useState(0);


  const subir2 = () =>{
      setNumClics2(numClics2 + 1);

  };

  const reiniciarContador2 = () =>{
    setNumClics2(0);
};

  const bajar2 = ()=> {
    if(numClics2 >0){
      setNumClics2(numClics2 - 1);
    }
  }

  //BOTÓN APARECE NUEVO CONTADOR

  const show = () =>{
    setMostrar(!mostrar)
  }

 


  return (
    <div className="App">
     <div className='logo-contenedor'>
      <img
      className='logo'
      src={logoMarvelChampions}
      alt='logo de imagen' />
      
     </div> 
     <div className='buti'>
      <button onClick={show} className='anadir'>Añadir personaje</button>

     </div>
     

     <div className='contenedor-principal'>
      
      
      <div className='primer'>
      <Contador
      numClics ={numClics} />

      <Boton
        texto='+ Vida '
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        
        <Menos
        texto='- Vida'
        menos={ menos } />
      
      <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
      

     
     
     <div style={{display: mostrar ? 'block': 'none'}} className='segundo'>
     
    <Contador
    numClics ={numClics2} />

    <Boton
      texto='+ Vida '
      esBotonDeClic={true}
      manejarClick={subir2} />
      
      <Menos
      texto='- Vida'
      menos={ bajar2 } />
    
    <Boton
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador2} />
    
     </div>

     </div> 
    </div>
  );
}

export default App;

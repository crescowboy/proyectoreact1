import React, { useContext, useState } from 'react'
import Nav from '../Nav'
import { useForm } from 'react-hook-form';
import GuardarRutina from './GuardarRutina';
import {Contexto} from '../context/Contexto';

const RegistrarRutina = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm();
    const {cancelarNombreRutina,setCancelarNombreRutina,
            agregarEjercicio, setAgregarEjercicio} = useContext(Contexto);
    const [nuevaRutina, setNuevaRutina] = useState(false);
    const [rutinaCreada, setRutinaCresda] = useState(false);
    const [nombreRutina, setNombreRutina] = useState(false);

    const obtenerValores=(data)=>{
        console.table(data)
        reset();
    }

    const crearRutina=()=>{
        setNombreRutina(true)
        setCancelarNombreRutina(true)
    }

    const cancelarRutina=()=>{
        if (agregarEjercicio) {
            setAgregarEjercicio(false);
          }
        
    }

  return (
    <>
    <div className='Pr-padre'>
    <Nav></Nav>

    {/* <GuardarRutina></GuardarRutina> */}

        <div className='container-rutinas'>
        <h1>Rutinas:</h1>
        <button className='boton-rutinas' onClick={crearRutina}>Crear Rutina</button>
        </div>


        {
           nombreRutina
           ?
           <GuardarRutina></GuardarRutina>
           :
           null 
        }

        {
           agregarEjercicio===true
           ? 
           <div className='tabla-nueva-rutina'>

            <form onSubmit={handleSubmit(obtenerValores)}>

                    <label htmlFor="ejercicio">Ejercico:</label>
            
                     <input
        type="text"
        id="ejercicio"
        {...register('ejercicio', {
          required: 'Este campo es requerido',
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: 'Este campo solo permite letras y espacios',
          },
        })}
      />
      {errors.ejercicio && <span>{errors.ejercicio.message}</span>}
                
                <label htmlFor="series">Series:</label>
                 <input type="number" id='series' 
                    {
                        ...register('series')
                    } />
                
                <label htmlFor="repeticiones">Repeticiones:</label>
                <input type="number" id='repeticiones' 
                    {
                        ...register('repeticiones')
                    } />
             
            <div className='botones-nueva-rutina'>
            <button type='submit' className='boton-rutinas' >Guardar</button>
            <button type='button' className='boton-rutinas' onClick={cancelarRutina}>Cancelar</button>
            </div>

            </form>
           </div>
           :null 
        }
    </div>
    </>
  )

}

export default RegistrarRutina

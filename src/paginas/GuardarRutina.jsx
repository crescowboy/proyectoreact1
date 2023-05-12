import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Contexto} from '../context/Contexto';

const GuardarRutina = () => {

    const {register,handleSubmit,reset, formState:{errors}} = useForm();
    const {cancelarNombreRutina,setCancelarNombreRutina,
           agregarEjercicio, setAgregarEjercicio} = useContext(Contexto);
    
    const cancelar =()=>{
        setCancelarNombreRutina(false)
        setAgregarEjercicio(false)
        reset()
    }
    
    const obtenerValores =(data)=>{
        console.table(data)
        setAgregarEjercicio(true)
        reset()
        
    }

  return (
    <>

    {
        cancelarNombreRutina===true
        ?
        <div className='tabla-nueva-rutina'>      
        <form onSubmit={handleSubmit(obtenerValores)}>
            <label htmlFor="nombre">Nombre de rutina: </label>
            <input type="text" id='nombre'
            {
                ...register('nombre',
                {
                    required: 'Este campo es requerido'
                })
            }
            />

            {errors.nombre && <span className='error'>{errors.nombre.message}</span>}
            <div className='botones-nueva-rutina'>
            <button className='boton-rutinas' type='submit'>Guardar</button>
            <button className='boton-rutinas' type='button' onClick={cancelar}>Cancelar</button>
            </div>
        </form>
        </div>

        :
        null
    }
        
    </>
  )
}

export default GuardarRutina

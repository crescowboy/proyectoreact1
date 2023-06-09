import React, { useState } from 'react'
import { Contexto } from './Contexto';

const Provider = ({children}) => {

  const [cancelarNombreRutina,setCancelarNombreRutina] = useState(false);
  const [agregarEjercicio, setAgregarEjercicio] = useState(false)
  const [misRutinas,setMisRutinas] = useState([])
  const [nombreRutina,setNombreRutina] = useState([]);
  const [rutinaGuardada,setRutinaGuardada] = useState(false);
  const [valores,setValores] = useState([]);
  const [estado,setEstado] = useState(false);
  
  // const [objetoMisRutinas,setObjetoMisRutinas] = useState([
  //   {
  //     ejercicio: "",
  //     series: "",
  //     Repeticiones: ""
  //   }
  // ]);
  return (
    <Contexto.Provider value={{
      cancelarNombreRutina,
      setCancelarNombreRutina,
      agregarEjercicio,
      setAgregarEjercicio,
      misRutinas,
      setMisRutinas,
      nombreRutina,
      setNombreRutina,
      rutinaGuardada,
      setRutinaGuardada,
      valores,
      setValores,
      estado,
      setEstado
      // objetoMisRutinas,
      // setObjetoMisRutinas
      }}>
      {children}
    </Contexto.Provider>
  )
}

export default Provider

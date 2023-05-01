import { Route, Router, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import RegistrarMarcas from "./paginas/RegistrarMarcas";


function App() {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/registrar' element={<RegistrarMarcas></RegistrarMarcas>}></Route>
    </Routes>
    </>
  );
}

export default App;

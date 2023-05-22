import { Route, Router, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import RegistrarMarcas from "./paginas/RegistrarMarcas";
import RegistrarRutina from "./paginas/RegistrarRutina";
import Provider from "./context/Provider";
import MisRutinas from "./paginas/MisRutinas";
import GuiaEjercicios from "./paginas/GuiaEjercicios";


function App() {
  return (
    <>
    <Provider>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/registrarPr' element={<RegistrarMarcas></RegistrarMarcas>}></Route>
        <Route path="/registrarRutinas" element={<RegistrarRutina></RegistrarRutina>}></Route>
        <Route path="/misRutinas" element={<MisRutinas></MisRutinas>}></Route>
        <Route path="/guiaEjercicios" element={<GuiaEjercicios></GuiaEjercicios>}></Route>
    </Routes>
    </Provider>
    </>
  );
}

export default App;

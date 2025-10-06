import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Biblioteca from "./pages/biblioteca";
import Sobre from "./pages/sobre";


export default function Navegacao (){


    return(

        <BrowserRouter>
        <Routes>

        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/biblioteca" element={<Biblioteca/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>

        </Routes>
        </BrowserRouter>
    )

}
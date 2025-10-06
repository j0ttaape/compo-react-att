import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Navegacao (){


    return(

        <BrowserRouter>
        <Routes>

        <Route path="/"></Route>
        <Route path="/bliblioteca"></Route>

        </Routes>
        </BrowserRouter>
    )

}
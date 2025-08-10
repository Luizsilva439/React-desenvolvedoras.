import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Duns from "./pages/Duns";
import Android from "./pages/Android";


function Approutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/duns" element={ <Duns/> }></Route>
                <Route path="/Android" element={ <Android/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes
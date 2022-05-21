import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseMovie from "./components/ChooseMovie";
import ChooseSeat from "./components/ChooseSeat";
import ChooseSession from "./components/ChooseSession";
import Sucesso from "./components/Sucesso";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sucesso />} />
                <Route path="/sessoes/:idFilme" element={<ChooseSession />} />
                <Route path="/assentos/:idSessao" element={<ChooseSeat />} />
                <Route path="/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>

    )
}



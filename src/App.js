import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseMovie from "./components/ChooseMovie";
import ChooseSeat from "./components/ChooseSeat";
import ChooseSession from "./components/ChooseSession";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChooseMovie />} />
                <Route path="/sessoes/:idFilme" element={<ChooseSession />} />
                <Route path="/assentos/:idSessao" element={<ChooseSeat />} />
            </Routes>
        </BrowserRouter>

    )
}



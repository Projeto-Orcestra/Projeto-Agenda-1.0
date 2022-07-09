import { Routes, Route } from "react-router-dom"
import LoginCadastro from "./pages/LoginCadastro"
import { Agenda } from "./pages/Agenda"

import "./App.css"

function App() {
    return (
        <Routes>
            <Route path="/default" element={<LoginCadastro />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="*" element={<LoginCadastro />} />
        </Routes>
    )
}

export default App

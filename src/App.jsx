import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Sobre from "./Components/Sobre/Sobre"
import Novidades from "./Components/Novidades/Novidades"
import GlobalStyle from "./GlobalStyle";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/novidades" element={<Novidades />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
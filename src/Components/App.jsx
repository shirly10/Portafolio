// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";

// import Contact from "./Contact";
// import Numero from "./Numero.jsx";


// function App() {
//   return (
//     <BrowserRouter basename="/portafolio/">
//       <header>
//         <h1>Mi Portafolio</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/numeros/1/shirly">Número 1</Link>
//         </nav>
//       </header>
//       <Routes>
//         <Route path="/" element={<p>Bienvenido</p>}/>
//         <Route path="/about" element={<p>Sobre mí</p>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/numeros/:num/:nombre" element={<Numero/>}/>
//         <Route path="*" element={<p>404 La página que buscas no existe</p>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokeApi from "../pages/projects/PokeApi.jsx";
import PokeCard from "./PokeCard.jsx";
import Home from "../pages/Home.jsx";
import SobreMi from "../pages/SobreMi.jsx";
import Habilidades from "../pages/Habilidades.jsx";
import Formacion from "../pages/Formacion.jsx";
import Proyectos from "../pages/Proyectos.jsx";
import Contacto from "../pages/Contacto.jsx";
import "../Styles/App.css"; 
import AnimationProvider from "../contexts/AnimationContext.jsx";

function App() {
  return(
    <BrowserRouter basename="/Portafolio/">
      <AnimationProvider>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/formacion" element={<Formacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/projects/pokeapi" element={<PokeApi/>}/>
        <Route path="/projects/pokeapi/:id" element={<PokeCard/>}/>
        </Routes>
      </AnimationProvider>
    </BrowserRouter>
  )
}

export default App;
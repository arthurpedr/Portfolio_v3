import Home from "../Home/sections/Home.jsx";
import Footer from "../layout/Footer.jsx";
import Header from "../layout/Header.jsx";
import About from "./sections/About.jsx";
import Contato from "./sections/Contato.jsx";
import Projetos from "./sections/Projetos.jsx";
import Servicos from "./sections/Servicos.jsx";

function App() {

  return (
    <main className='w-full h-screen flex flex-col'>
      <Header />
      <Home />
      <About />
      <Servicos/>
      <Projetos />
      <Contato />
      <Footer />
    </main>
  )
}

export default App
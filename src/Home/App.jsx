import Home from "../Home/sections/Home.jsx";
import Footer from "../layout/Footer.jsx";
import Header from "../layout/Header.jsx";
import Servicos from "./sections/Servicos.jsx";

function App() {

  return (
    <main className='w-full h-screen flex flex-col'>
      <Header />
      <Home />
      <Servicos/>
      <Footer />
    </main>
  )
}

export default App
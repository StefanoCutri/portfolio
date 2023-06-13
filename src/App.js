import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useContext } from "react";
import NavbarContext from "./context/NavbarContext";

const App = () => {
  const { navbarState, handleOpen } = useContext(NavbarContext);

  return (
    <>
      <Header />
      <div
        onClick={() => {
          navbarState.isNavbarOpen && handleOpen(false);
        }}
      >
        <Info />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default App;

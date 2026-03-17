import { useContext } from "react";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import NavbarContext from "./context/NavbarContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const { navbarState, handleOpen } = useContext(NavbarContext);

  return (
    <>
      <Header />
      <div
      className="info-container"
        onClick={() => {
          navbarState.isNavbarOpen && handleOpen(false);
        }}
      >
        <Info />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default App;

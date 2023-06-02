import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <About/>
      <Skills/>
      <Experience />
      <Contact/>
    </>
  );
};

export default App;

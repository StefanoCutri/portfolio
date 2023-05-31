import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <About/>
      <Skills/>
      <Experience />
    </>
  );
};

export default App;

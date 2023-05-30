import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Skills } from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <About/>
      <Skills/>
    </>
  );
};

export default App;

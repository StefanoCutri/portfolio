import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Info />
      <About/>
    </>
  );
};

export default App;

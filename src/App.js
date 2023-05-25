import { Header } from "./components/Header";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <About/>
    </div>
  );
};

export default App;

import { useContext, useEffect } from "react";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import NavbarContext from "./context/NavbarContext";
import "../src/index.css";

// Scroll reveal: watches all .reveal elements and adds .visible when in view
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

const App = () => {
  const { navbarState, handleOpen } = useContext(NavbarContext);

  useScrollReveal();

  return (
    <>
      <Header />

      {/* Main content — closes mobile menu on click */}
      <main
        onClick={() => {
          if (navbarState.isNavbarOpen) handleOpen(false);
        }}
      >
        <Info />
        <About />
        <Projects />
        <Experience />
        <Contact />

        <footer>
          <p
            style={{
              textAlign: "center",
              padding: "2rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--slate)",
              opacity: 0.5,
              letterSpacing: "0.1em",
              borderTop: "1px solid rgba(82,183,136,0.08)",
            }}
          >
            Designed &amp; Built by Stefano Cutri · {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
};

export default App;

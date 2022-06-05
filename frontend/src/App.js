import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Predictor from "./pages/Predictor";
import "./index.css";

function Home() {
  return (
    <section className="card">
      <h2>Welcome to Smiski Predictor</h2>

      <p>
        Predict likely Smiski morphology from weight and shake
        features.
      </p>

      <Link to="/predict">
        <button>Start Prediction</button>
      </Link>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Link to="/" className="title-link">
            <h1>Smiski Predictor</h1>
          </Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predictor />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
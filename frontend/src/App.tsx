import { useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import AddCollection from "./pages/AddCollection";
import "./index.css";

function App() {
  const [page, setPage] = useState<"admin" | "addCollection">("admin");

  return (
    <div className="app">
      <header>
        <h1>Smitski Predictor</h1>

        <nav>
          <button onClick={() => setPage("admin")}>Admin</button>
          <button onClick={() => setPage("addCollection")}>
            Add Collection
          </button>
        </nav>
      </header>

      <main>
        {page === "admin" && <AdminDashboard />}
        {page === "addCollection" && <AddCollection />}
      </main>
    </div>
  );
}

export default App;
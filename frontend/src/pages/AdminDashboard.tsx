import { useEffect, useState } from "react";
import { getCollections } from "../api/api";
import type { Collection } from "../types/collection";

function AdminDashboard() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getCollections()
      .then(setCollections)
      .catch((err: unknown) => {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong");
      });
  }, []);

  return (
    <section className="card">
      <h2>Admin Dashboard</h2>

      {error && <p className="error">{error}</p>}

      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>{collection.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default AdminDashboard;
import { useState } from "react";
import { createCollection } from "../api/api";

function AddCollection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const created = await createCollection(name);
      setMessage(`Created: ${created.name}`);
      setName("");
    } catch (err: unknown) {
      if (err instanceof Error) setMessage(err.message);
      else setMessage("Something went wrong");
    }
  }

  return (
    <section className="card">
      <h2>Add Collection</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Collection name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Living Series"
            required
          />
        </label>

        <button type="submit">Save</button>
      </form>

      {message && <p>{message}</p>}
    </section>
  );
}

export default AddCollection;
import type { Collection } from "../types/collection";

const API_BASE_URL = "http://127.0.0.1:8000";

export async function getCollections(): Promise<Collection[]> {
  const res = await fetch(`${API_BASE_URL}/collections`);

  if (!res.ok) {
    throw new Error("Failed to fetch collections");
  }

  return res.json();
}

export async function createCollection(name: string): Promise<Collection> {
  const res = await fetch(`${API_BASE_URL}/collections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error("Failed to create collection");
  }

  return res.json();
}
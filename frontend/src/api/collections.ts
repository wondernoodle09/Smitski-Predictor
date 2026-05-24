export type Collection = {
  id: number;
  name: string;
};

const API_BASE_URL = "http://127.0.0.1:8000";

export async function getCollections(): Promise<Collection[]> {
  const response = await fetch(`${API_BASE_URL}/collections`);

  if (!response.ok) {
    throw new Error("Failed to fetch collections");
  }

  return response.json();
}
import { createClient } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
import { Post } from "./definition";

export async function connectToDb() {
  const client = createClient();
  await client.connect();

  try {
    if (client) {
      console.log("Database connected successfully");
      return client;
    }
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const data = await sql`
        SELECT * FROM posts
    `;
    console.log("data>>>>>>>>>>>>>>>", data.rows);

    return data.rows as Post[];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
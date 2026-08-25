import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.DATABASE_URL!);

let schemaReady: Promise<unknown> | null = null;

export function ensureSchema() {
  if (!schemaReady) {
    schemaReady = sql`
      CREATE TABLE IF NOT EXISTS donors (
        id SERIAL PRIMARY KEY,
        label TEXT NOT NULL,
        amount INTEGER NOT NULL,
        is_anonymous BOOLEAN NOT NULL DEFAULT FALSE,
        name TEXT,
        surname TEXT,
        age INTEGER,
        country TEXT,
        job TEXT,
        notes TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
  }
  return schemaReady;
}

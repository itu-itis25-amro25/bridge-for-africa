import { NextRequest, NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { amount, name, surname, age, country, job, anonymous, notes, company } = body;

  if (company) {
    return NextResponse.json({ ok: true, label: `${name} ${surname}` });
  }

  if (!name || !surname || !age || !country || !amount) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  const label = anonymous
    ? `Anonymous #${Math.floor(1000 + Math.random() * 9000)}`
    : `${name} ${surname}`;

  await ensureSchema();
  await sql`
    INSERT INTO donors (label, amount, is_anonymous, name, surname, age, country, job, notes)
    VALUES (${label}, ${amount}, ${Boolean(anonymous)}, ${name}, ${surname}, ${age}, ${country}, ${job || null}, ${notes || null})
  `;

  return NextResponse.json({ ok: true, label });
}

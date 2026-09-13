import { NextRequest, NextResponse } from "next/server";
import { sql, ensureSchema } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { amount, name, surname, age, country, email, job, anonymous, notes, company } = body;

  if (company) {
    return NextResponse.json({ ok: true, label: `${name} ${surname}` });
  }

  const amountNumber = Number(amount);
  const emailValid = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  if (
    !name ||
    !surname ||
    !age ||
    !country ||
    !emailValid ||
    !Number.isFinite(amountNumber) ||
    amountNumber <= 0
  ) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  const label = anonymous
    ? `Anonymous #${Math.floor(1000 + Math.random() * 9000)}`
    : `${name} ${surname}`;

  await ensureSchema();
  await sql`
    INSERT INTO donors (label, amount, is_anonymous, name, surname, age, country, email, job, notes)
    VALUES (${label}, ${amountNumber}, ${Boolean(anonymous)}, ${name}, ${surname}, ${age}, ${country}, ${email.trim()}, ${job || null}, ${notes || null})
  `;

  return NextResponse.json({ ok: true, label });
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.name || !body.surname || !body.age || !body.country) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  console.log("New contribution pledge:", body);

  return NextResponse.json({ ok: true });
}

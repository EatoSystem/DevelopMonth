import { NextRequest, NextResponse } from "next/server";
import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  createAccessToken,
  passwordIsValid,
} from "@/lib/site-gate";

export async function POST(request: NextRequest) {
  let password = "";

  try {
    const body = (await request.json()) as { password?: unknown };
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json(
      { error: "Incorrect password. Please try again." },
      { status: 400 },
    );
  }

  if (!(await passwordIsValid(password))) {
    return NextResponse.json(
      { error: "Incorrect password. Please try again." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: ACCESS_COOKIE_NAME,
    value: await createAccessToken(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_COOKIE_MAX_AGE,
  });

  return response;
}

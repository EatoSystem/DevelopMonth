import { NextRequest, NextResponse } from "next/server";
import {
  ACCESS_COOKIE_NAME,
  createAccessToken,
} from "@/lib/site-gate";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/access" || pathname === "/api/unlock") {
    return NextResponse.next();
  }

  const suppliedToken = request.cookies.get(ACCESS_COOKIE_NAME)?.value;
  const expectedToken = await createAccessToken();

  if (suppliedToken === expectedToken) {
    return NextResponse.next();
  }

  const accessUrl = request.nextUrl.clone();
  accessUrl.pathname = "/access";
  accessUrl.search = "";
  accessUrl.searchParams.set("next", `${pathname}${search}`);

  return NextResponse.redirect(accessUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|map)$).*)",
  ],
};

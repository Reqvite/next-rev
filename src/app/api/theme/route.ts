import { NextResponse } from "next/server";

import { TEN_YEARS_IN_SECONDS } from "@/shared/const/cookieTime";

export const POST = async (request: Request) => {
  const origin = request.headers.get("origin");
  const { theme } = await request.json();

  const response = new NextResponse(theme);

  response.cookies.set("chakra-ui-color-mode", theme, {
    path: "/",
    maxAge: TEN_YEARS_IN_SECONDS,
    sameSite: "lax",
    httpOnly: true,
    secure: !origin?.includes("localhost"),
  });

  return response;
};

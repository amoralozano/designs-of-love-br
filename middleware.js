import { FRONTEND_API } from "@clerk/nextjs/dist/server/clerk";
import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware((req, frontEndAPI) => {
  const frontEndAPI = { FRONTEND_API };

  return NextResponse.next(frontEndAPI);
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};

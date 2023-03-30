import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = Clerk.create({
  frontendApi: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

export default clerk;

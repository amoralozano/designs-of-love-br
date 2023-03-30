import Clerk from "@clerk/clerk-js";
const publishableKey = pk_live_Y2xlcmsuZGVzaWdub2Zsb3ZlYnIuY29tJA;

const clerk = new Clerk(publishableKey);
await clerk.load({
  // Set load options here...
});

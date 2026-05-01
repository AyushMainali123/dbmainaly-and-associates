import { getPayload } from "payload";
import config from "../payload.config";

async function seed() {
  console.log("Initializing Payload...");
  const payload = await getPayload({ config });

  console.log("Seeding HomePage global...");
  
  // By passing an empty object, Payload will apply all defaultValues defined in the schema
  await payload.updateGlobal({
    slug: "home-page",
    data: {},
  });

  console.log("Successfully seeded HomePage.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Error seeding HomePage:", err);
  process.exit(1);
});

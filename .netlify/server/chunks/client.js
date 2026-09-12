import { createClient } from "@sanity/client";
const PUBLIC_SANITY_PROJECT_ID = "6iounp1w";
const PUBLIC_SANITY_DATASET = "production";
const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true
});
export {
  client as c
};

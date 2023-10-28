import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "c4s1h094",
  dataset: "production",
  apiVersion: "2023-10-25",
  useCdn: false,
};

const client = createClient(config);

export default client;
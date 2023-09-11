import { createClient, groq } from "next-sanity";

export async function getProject() {
  const client = createClient({
    projectId: "34mi31wy",
    dataset: "production",
    apiVersion: "2023-03-09",
    useCdn: false,
  });
  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
  );
}

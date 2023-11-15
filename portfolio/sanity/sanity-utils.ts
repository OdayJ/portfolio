import { createClient, groq } from "next-sanity";

// Reuse the same client for both functions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-11-13",
  useCdn: false,
});

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url
    }`
  );
}

export async function getProjectById(projectId: any) {
  const query = groq`*[_type == "project" && _id == $projectId]{
    _id,
    _createdAt,
    name,
    timeline,
    color,
    statement,
    description,
    problem,
    results,
    reflection,
    "slug": slug.current,
    "image": image.asset->url,
    gallery[]{
      asset->{
          url
      }
  },
    url,
    technologies
  }`;
  const params = { projectId };
  const result = await client.fetch(query, params);
  return result[0]; // Since the ID is unique, the first item in the result is the project we want
}

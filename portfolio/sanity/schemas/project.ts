const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "timeline",
      title: "Timeline",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "statement",
      title: "Statement",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "problem",
      title: "Problem",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "results",
      title: "Results",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "reflection",
      title: "Reflection",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;

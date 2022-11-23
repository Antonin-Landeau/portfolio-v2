export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
      {
        name: "post",
        title: "Poste",
        type: "string",
      },
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
    { name: "createdAt", title: "Created at", type: "datetime" },
  ],
};

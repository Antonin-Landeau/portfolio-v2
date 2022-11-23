export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime"
    }
  ],
};


import { BiBriefcase } from "react-icons/bi";

const education = {
  name: "education",
  title: "education",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "institute Name",
      type: "string",
      description: "What is the name of the institute?",
    },
    {
      name: "jobTitle",
      title: "education Title",
      type: "string",
      description: "Enter the education title. ",
    },
    {
      name: "logo",
      title: "institute Logo",
      type: "image",
    },
    {
      name: "url",
      title: "institute Website",
      type: "url",
    },
    {
      name: "description",
      title: "education Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default education;
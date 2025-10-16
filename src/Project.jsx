import React from "react";
import { useFetchProjects } from "./fetchProjects";
const Project = () => {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);
  return <h2>Project</h2>;
};

export default Project;

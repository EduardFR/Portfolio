import styled from "styled-components";
import Project from "./Project";

const ProjectsListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  gap: 70px 30px;
`;

function ProjectsList() {
  return (
    <ProjectsListStyle>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ProjectsListStyle>
  );
}

export default ProjectsList;

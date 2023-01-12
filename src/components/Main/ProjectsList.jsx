import styled from "styled-components";
import Project from "./Project";
import { projects } from "../../constants/projects";

const ProjectsListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 70px 30px;
  @media ${(props) => props.theme.media.phone} {
    grid-template-columns: auto;
    row-gap: 40px;
  }
`;

function ProjectsList() {
  return (
    <ProjectsListStyle>
      {projects.map((project) => (
        <Project
          key={project.ID}
          url={project.url}
          name={project.name}
          skills={project.skills}
          linkProject={project.linkToProject}
          linkCode={project.linkToCode}
        />
      ))}
    </ProjectsListStyle>
  );
}

export default ProjectsList;

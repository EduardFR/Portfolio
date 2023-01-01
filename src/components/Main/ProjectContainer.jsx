import styled from "styled-components";
import ProjectHeader from "./ProjectHeader";
import ProjectsList from "./ProjectsList";

const ProjectContainerStyle = styled.div`
  margin-bottom: 139px;
`;

function ProjectContainer() {
  return (
    <ProjectContainerStyle>
      <ProjectHeader />
      <ProjectsList />
    </ProjectContainerStyle>
  );
}

export default ProjectContainer;

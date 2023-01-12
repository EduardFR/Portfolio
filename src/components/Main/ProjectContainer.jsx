import styled from "styled-components";
import ProjectHeader from "./ProjectHeader";
import ProjectsList from "./ProjectsList";

const ProjectContainerStyle = styled.div`
  margin-bottom: 139px;
  @media ${(props) => props.theme.media.phone} {
    margin-top: 80px;
    margin-bottom: 80px;
  }
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

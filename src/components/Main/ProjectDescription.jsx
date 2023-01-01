import styled from "styled-components";
import ProjectSkills from "./ProjectSkills";

const ProjectDescriptionStyle = styled.div`
  text-align: left;
`;
const ProjectTitleStyle = styled.h3``;

function ProjectDescription() {
  return (
    <ProjectDescriptionStyle>
      <ProjectTitleStyle>NAME PROJECT</ProjectTitleStyle>
      <ProjectSkills />
    </ProjectDescriptionStyle>
  );
}

export default ProjectDescription;

import styled from "styled-components";
import ProjectSkills from "./ProjectSkills";

const ProjectDescriptionStyle = styled.div`
  text-align: left;
`;
const ProjectTitleStyle = styled.h3`
  padding-bottom: 7px;
`;

function ProjectDescription({ skills, name }) {
  return (
    <ProjectDescriptionStyle>
      <ProjectTitleStyle>{name}</ProjectTitleStyle>
      <ProjectSkills skills={skills} />
    </ProjectDescriptionStyle>
  );
}

export default ProjectDescription;

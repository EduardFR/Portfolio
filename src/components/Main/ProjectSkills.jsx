import styled from "styled-components";

const ProjectSkillsStyle = styled.div`
  display: flex;
`;

const SkillStyle = styled.p`
  margin-right: 20px;
`;

function ProjectSkills() {
  return (
    <ProjectSkillsStyle>
      <SkillStyle>HTML</SkillStyle>
      <SkillStyle>CSS</SkillStyle>
    </ProjectSkillsStyle>
  );
}

export default ProjectSkills;

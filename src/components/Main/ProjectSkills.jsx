import styled from "styled-components";

const ProjectSkillsStyle = styled.div`
  display: flex;
  column-gap: 20px;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 20px;
  }
`;

const SkillStyle = styled.p``;

function ProjectSkills({ skills }) {
  return (
    <ProjectSkillsStyle>
      {skills.map((skill) => (
        <SkillStyle key={skill.id}>{skill.skill}</SkillStyle>
      ))}
    </ProjectSkillsStyle>
  );
}

export default ProjectSkills;

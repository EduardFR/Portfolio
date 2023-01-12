import styled from "styled-components";
import Skill from "./Skill";
import { skills } from "../../constants/skills";

const SkillsListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 58px;
  border-top: solid 1px #979797;
  padding-top: 72px;
  padding-bottom: 140px;
  color: var(--color-White);
  @media ${(props) => props.theme.media.phone} {
    grid-template-columns: auto;
    row-gap: 24px;
    border-bottom: solid 1px #979797;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

function SkillsList() {
  return (
    <SkillsListStyle>
      {skills.map((skill) => (
        <Skill
          key={skill.name}
          name={skill.name}
          experience={skill.experience}
        />
      ))}
    </SkillsListStyle>
  );
}

export default SkillsList;

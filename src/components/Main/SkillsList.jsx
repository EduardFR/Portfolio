import styled from "styled-components";
import Skill from "./Skill";

const SkillsListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 58px;
  border-top: solid 1px #979797;
  padding-top: 72px;
  margin-bottom: 140px;
  color: var(--color-White);
`;

function SkillsList() {
  return (
    <SkillsListStyle>
      <Skill />
      <Skill />
      <Skill />
      <Skill />
    </SkillsListStyle>
  );
}

export default SkillsList;

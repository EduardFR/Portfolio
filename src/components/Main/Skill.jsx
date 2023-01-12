import styled from "styled-components";

const SkillStyle = styled.h2``;
const TextStyle = styled.p``;

function Skill({ name, experience }) {
  return (
    <SkillStyle>
      {name}
      <TextStyle>{experience} Experience</TextStyle>
    </SkillStyle>
  );
}

export default Skill;

import styled from "styled-components";
import ProjectContainer from "./ProjectContainer";
import SkillsList from "./SkillsList";

const MainStyle = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

function Main() {
  return (
    <MainStyle>
      <SkillsList />
      <ProjectContainer />
    </MainStyle>
  );
}

export default Main;

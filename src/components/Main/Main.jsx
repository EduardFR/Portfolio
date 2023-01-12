import styled from "styled-components";
import ProjectContainer from "./ProjectContainer";
import SkillsList from "./SkillsList";

const MainStyle = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  @media ${(props) => props.theme.media.phone} {
    max-width: 95%;
  }
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

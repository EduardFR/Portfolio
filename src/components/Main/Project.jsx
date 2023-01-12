import styled from "styled-components";
import PhoneProjectLinks from "./PhoneProjectLinks";
import ProjectDescription from "./ProjectDescription";
import ProjectLinks from "./ProjectLinks";

const ProjectStyle = styled.div``;

const ProjectLinksBlock = styled.div`
  display: flex;
  width: 540px;
  height: 400px;
  margin-bottom: 20px;
  position: relative;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    height: 240px;
  }
`;

const ProjectImage = styled.img`
  width: 540px;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    height: 240px;
  }
`;

function Project({ url, skills, name, linkCode, linkProject }) {
  return (
    <ProjectStyle>
      <ProjectLinksBlock>
        <ProjectImage src={url} />
        <ProjectLinks linkCode={linkCode} linkProject={linkProject} />
      </ProjectLinksBlock>

      <ProjectDescription skills={skills} name={name} />
      <PhoneProjectLinks linkCode={linkCode} linkProject={linkProject} />
    </ProjectStyle>
  );
}

export default Project;

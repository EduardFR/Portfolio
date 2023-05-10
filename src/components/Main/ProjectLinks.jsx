import styled from "styled-components";

const ProjectLinksStyle = styled.div`
  display: flex;
  position: absolute;
  opacity: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 60px;
  height: 100%;
  width: 100%;
  &:hover {
    opacity: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;

const LinkStyle = styled.a`
  display: inline-block;
  height: 38px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 2.28px;
  text-decoration: none;
  border-bottom: solid 2px var(--color-Green);
  cursor: pointer;
  color: var(--color-White);
  &:hover {
    color: var(--color-Green);
  }
`;

function ProjectLinks({ linkCode, linkProject }) {
  console.log(linkCode);
  return (
    <ProjectLinksStyle>
      {linkProject ? (
        <LinkStyle target="_blank" href={linkProject}>
          VIEW PROJECT
        </LinkStyle>
      ) : (
        ""
      )}
      {linkCode ? (
        <LinkStyle target="_blank" href={linkCode}>
          VIEW CODE
        </LinkStyle>
      ) : (
        ""
      )}
    </ProjectLinksStyle>
  );
}

export default ProjectLinks;

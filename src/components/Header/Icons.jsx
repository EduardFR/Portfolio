import styled from "styled-components";
import { ReactComponent as GitSVG } from "../../assets/Git.svg";
import { ReactComponent as TwitterSVG } from "../../assets/Twitter.svg";
import { ReactComponent as LinkedInSVG } from "../../assets/LinkedIn.svg";
import { ReactComponent as FrontendmentorSVG } from "../../assets/Frontendmentor.svg";

const GitStyle = styled(GitSVG)`
  cursor: pointer;
  :hover {
    fill: var(--color-Green);
  }
`;

const TwitterStyle = styled(TwitterSVG)`
  cursor: pointer;
  :hover {
    fill: var(--color-Green);
  }
`;

const LinkedInStyle = styled(LinkedInSVG)`
  display: none;
  cursor: pointer;
  :hover {
    fill: var(--color-Green);
  }
`;

const FrontendmentorStyle = styled(FrontendmentorSVG)`
  display: none;
  cursor: pointer;
  :hover {
    fill: var(--color-Green);
  }
`;

const LinkStyle = styled.a``;

const IconsStyle = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 32px;
  margin-right: 30px;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 0px;
  }
`;

function Icons() {
  return (
    <IconsStyle>
      <LinkStyle target="_blank" href="https://github.com/EduardFR">
        <GitStyle />
      </LinkStyle>
      <LinkStyle>
        <FrontendmentorStyle />
      </LinkStyle>
      <LinkStyle>
        <LinkedInStyle />
      </LinkStyle>
      <LinkStyle target="_blank" href="https://twitter.com/KatochiL">
        <TwitterStyle />
      </LinkStyle>
    </IconsStyle>
  );
}

export default Icons;

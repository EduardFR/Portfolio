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
  cursor: pointer;
  :hover {
    fill: var(--color-Green);
  }
`;

const FrontendmentorStyle = styled(FrontendmentorSVG)`
  cursor: pointer;
  :hover {
    fill: var(--color-Green);
  }
`;

const IconsStyle = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 32px;
  margin-right: 30px;
`;

function Icons() {
  return (
    <IconsStyle>
      <GitStyle />
      <FrontendmentorStyle />
      <LinkedInStyle />
      <TwitterStyle />
    </IconsStyle>
  );
}

export default Icons;

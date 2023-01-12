import styled from "styled-components";
import ContactContainer from "./ContactContainer";
import FooterNavigation from "./FooterNavigation";

const FooterContainerStyle = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 84px 0 92px;
  @media ${(props) => props.theme.media.phone} {
    max-width: 95%;
  }
`;

function FooterContainer() {
  return (
    <FooterContainerStyle>
      <ContactContainer />
      <FooterNavigation />
    </FooterContainerStyle>
  );
}

export default FooterContainer;

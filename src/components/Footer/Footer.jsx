import styled from "styled-components";
import FooterContainer from "./FooterContainer";

const FooterStyle = styled.div`
  background-color: var(--color-DarkGray);
  width: 100%;
`;

function Footer() {
  return (
    <FooterStyle id="footer">
      <FooterContainer />
    </FooterStyle>
  );
}

export default Footer;

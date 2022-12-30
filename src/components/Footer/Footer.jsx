import styled from "styled-components";

const FooterContainerStyle = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  background-color: #242424;
`;

const FooterStyle = styled.div`
  background-color: #242424;
  width: 100%;
  height: 100px;
`;

function Footer() {
  return (
    <FooterStyle>
      <FooterContainerStyle>Footer</FooterContainerStyle>
    </FooterStyle>
  );
}

export default Footer;

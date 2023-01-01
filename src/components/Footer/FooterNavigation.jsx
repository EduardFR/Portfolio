import styled from "styled-components";
import Icons from "../Header/Icons";

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 127px;
  padding-top: 39px;
`;

const MyNameStyle = styled.h3`
  font-size: 32px;
  letter-spacing: -0.44px;
`;

function FooterNavigation() {
  return (
    <NavigationStyle>
      <MyNameStyle>adamkeys</MyNameStyle>
      <Icons />
    </NavigationStyle>
  );
}

export default FooterNavigation;

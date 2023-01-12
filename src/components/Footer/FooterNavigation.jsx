import styled from "styled-components";
import Icons from "../Header/Icons";

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding-bottom: 10px;
  }
`;

const MyNameStyle = styled.h3`
  font-size: 32px;
  letter-spacing: -0.44px;
`;

function FooterNavigation() {
  return (
    <NavigationStyle>
      <MyNameStyle>edfrost</MyNameStyle>
      <Icons />
    </NavigationStyle>
  );
}

export default FooterNavigation;

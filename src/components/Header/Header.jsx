import styled from "styled-components";
import HeaderContent from "./HeaderContent";
import HeaderNavigation from "./HeaderNavigation";
import { ReactComponent as PhotoPNG } from "../../assets/image-profile.svg";

const MyPhoto = styled(PhotoPNG)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const HeaderStyle = styled.div`
  position: relative;
  max-width: 1110px;
  margin: 0 auto 204px;
`;

function Header() {
  return (
    <HeaderStyle>
      <HeaderNavigation />
      <HeaderContent />
      <MyPhoto />
    </HeaderStyle>
  );
}

export default Header;

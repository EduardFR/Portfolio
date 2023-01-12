import styled from "styled-components";
import HeaderContent from "./HeaderContent";
import HeaderNavigation from "./HeaderNavigation";
import PhotoPNG from "../../assets/my-photo.jpg";

const MyPhoto = styled.img`
  position: absolute;
  width: 445px;
  height: 720px;
  opacity: 80%;
  top: 0;
  right: 0;
  z-index: -1;
  @media ${(props) => props.theme.media.phone} {
    width: 200px;
    height: 315px;
    padding-bottom: 40px;
    position: unset;
  }
`;

const HeaderStyle = styled.div`
  position: relative;
  max-width: 1110px;
  margin: 0 auto 204px;
  @media ${(props) => props.theme.media.phone} {
    position: unset;
    margin-bottom: 80px;
    max-width: 95%;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <HeaderNavigation />
      <MyPhoto src={PhotoPNG} />
      <HeaderContent />
    </HeaderStyle>
  );
}

export default Header;

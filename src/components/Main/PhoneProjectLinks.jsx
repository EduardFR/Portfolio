import styled from "styled-components";

const PhoneProjectLinksStyle = styled.div`
  display: none;
  column-gap: 30px;
  justify-content: start;
  @media ${(props) => props.theme.media.phone} {
    display: flex;
  }
`;

const PhoneLinkStyle = styled.a`
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

function PhoneProjectLinks({ linkCode, linkProject }) {
  return (
    <PhoneProjectLinksStyle>
      <PhoneLinkStyle target="_blank" href={linkProject}>
        VIEW PROJECT
      </PhoneLinkStyle>
      <PhoneLinkStyle target="_blank" href={linkCode}>
        VIEW CODE
      </PhoneLinkStyle>
    </PhoneProjectLinksStyle>
  );
}

export default PhoneProjectLinks;

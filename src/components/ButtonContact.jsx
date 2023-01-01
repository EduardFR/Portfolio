import styled from "styled-components";

const ButtonContactStyle = styled.button`
  display: inline-block;
  height: 38px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 2.28px;
  background: none;
  border: none;
  border-bottom: solid 2px var(--color-Green);
  cursor: pointer;
  color: var(--color-White);
  &:hover {
    color: var(--color-Green);
  }
`;

function ButtonContact() {
  return <ButtonContactStyle>CONTACT ME</ButtonContactStyle>;
}

export default ButtonContact;

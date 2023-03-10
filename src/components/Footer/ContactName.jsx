import styled from "styled-components";

const ContactNameStyle = styled.input`
  outline: none;
  border: none;
  border-bottom: solid 1px var(--color-White);
  padding: 0 24px 17px;
  width: 400px;
  background-color: var(--color-DarkGrey);
  color: var(--color-White);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.22px;
  text-align: left;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: -0.22px;
    text-align: left;
  }
`;

function ContactName() {
  return <ContactNameStyle id="contact" type="text" placeholder="NAME" />;
}

export default ContactName;

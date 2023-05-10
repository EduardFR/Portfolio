import styled from "styled-components";

const ContactMessageStyle = styled.textarea`
  outline: none;
  border: none;
  resize: none;
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

function ContactMessage() {
  return <ContactMessageStyle type="text" placeholder="MESSAGE" rows="3" />;
}

export default ContactMessage;

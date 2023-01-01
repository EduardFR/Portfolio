import styled from "styled-components";
import ContactEmail from "./ContactEmail";
import ContactMessage from "./ContactMessage";
import ContactName from "./ContactName";
import ContactSendButton from "./ContactSendButton";

const ContactInputGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 32px;
`;

function ContactInputGroup() {
  return (
    <ContactInputGroupStyle>
      <ContactName />
      <ContactEmail />
      <ContactMessage />
      <ContactSendButton />
    </ContactInputGroupStyle>
  );
}

export default ContactInputGroup;

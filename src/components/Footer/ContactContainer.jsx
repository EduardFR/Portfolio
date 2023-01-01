import styled from "styled-components";
import ContactContent from "./ContactContent";
import ContactInputGroup from "./ContactInputGroup";

const ContactContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 92px;
  margin-bottom: 42px;

  border-bottom: 1px solid var(--color-White);
`;

function ContactContainer() {
  return (
    <ContactContainerStyle>
      <ContactContent />
      <ContactInputGroup />
    </ContactContainerStyle>
  );
}

export default ContactContainer;

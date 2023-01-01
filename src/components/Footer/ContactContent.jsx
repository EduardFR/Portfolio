import styled from "styled-components";

const ContactContentStyle = styled.div`
  text-align: left;
`;

const ContactTitleStyle = styled.h1`
  margin-bottom: 36px;
`;

const ContactTextStyle = styled.p`
  max-width: 445px;
  font-size: 18px;
  line-height: 28px;
`;

function ContactContent() {
  return (
    <ContactContentStyle>
      <ContactTitleStyle>Contact</ContactTitleStyle>
      <ContactTextStyle>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </ContactTextStyle>
    </ContactContentStyle>
  );
}

export default ContactContent;

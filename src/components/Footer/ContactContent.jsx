import styled from "styled-components";

const ContactContentStyle = styled.div`
  text-align: left;
  @media ${(props) => props.theme.media.phone} {
    text-align: center;
  }
`;

const ContactTitleStyle = styled.h1`
  margin-bottom: 36px;
`;

const ContactTextStyle = styled.p`
  max-width: 445px;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 20px;
`;
const ButtonMailStyle = styled.a`
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

function ContactContent() {
  return (
    <ContactContentStyle>
      <ContactTitleStyle>Contact</ContactTitleStyle>
      <ContactTextStyle>
        I would love to hear about your project and how I could help. Please
        send a message to the mail:
      </ContactTextStyle>

      <ButtonMailStyle target="_blank" href="mailto:“frost_eduard@mail.ru">
        frost_eduard@mail.ru
      </ButtonMailStyle>
    </ContactContentStyle>
  );
}

export default ContactContent;

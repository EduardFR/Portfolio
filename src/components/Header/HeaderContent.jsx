import styled from "styled-components";
import ButtonContact from "../ButtonContact";

const InsertStyle = styled.div`
  display: inline-block;
  border-bottom: var(--color-Green) solid 6px;
  padding-bottom: 2px;
`;

const HeaderContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 709px;
  text-align: left;
`;

const HeaderTitleStyle = styled.h1`
  margin-bottom: 43px;
`;

const HeaderTextStyle = styled.p`
  max-width: 445px;
  margin-bottom: 66px;
`;

function HeaderContent() {
  return (
    <HeaderContentStyle>
      <HeaderTitleStyle>
        Nice to meet you! I’m <InsertStyle>Adam Keyes.</InsertStyle>
      </HeaderTitleStyle>
      <HeaderTextStyle>
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </HeaderTextStyle>
      <ButtonContact />
    </HeaderContentStyle>
  );
}

export default HeaderContent;

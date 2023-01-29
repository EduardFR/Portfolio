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
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const HeaderTitleStyle = styled.h1`
  margin-bottom: 43px;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 24px;
  }
`;

const HeaderTextStyle = styled.p`
  max-width: 445px;
  margin-bottom: 66px;
  @media ${(props) => props.theme.media.phone} {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

function HeaderContent() {
  return (
    <HeaderContentStyle>
      <HeaderTitleStyle>
        Nice to meet you! I’m <InsertStyle>Eduard Frost.</InsertStyle>
      </HeaderTitleStyle>
      <HeaderTextStyle>
        I’m a front-end developer and I'm looking for my first job.
      </HeaderTextStyle>
      <ButtonContact />
    </HeaderContentStyle>
  );
}

export default HeaderContent;

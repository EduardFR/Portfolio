import styled from "styled-components";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App;

import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./Theme";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
}`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-size: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TurnBtn = styled.div`
  overflow: hidden;
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  margin-right: 50px;
  background-color: ${(props) => props.theme.textColor};
  &:active {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

const TurnBtnTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: ${(props) => props.TopNum};

  transition: ease 0.5s;

  width: 100px;
  height: 200px;
  font-size: 20px;
  span {
    width: 100px;
    height: 40px;
    border: solid ${(props) => props.theme.bgColor} 2px;
  }
`;

const TurnBtnText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [onoff, setOnoff] = useState("0px");

  const onChangeTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    setOnoff(onoff === "0px" ? "-100px" : "0px");
    console.log(onoff);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <TurnBtn onClick={onChangeTheme}>
            <TurnBtnTextBox TopNum={onoff}>
              <TurnBtnText>turn on</TurnBtnText>
              <span></span>
              <TurnBtnText>turn off</TurnBtnText>
            </TurnBtnTextBox>
          </TurnBtn>
          <span>Hello!</span>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

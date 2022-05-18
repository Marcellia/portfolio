import GlobalStyle from "./globalStyles";
import { Route, Switch } from "react-router-dom";
import {
  Main,
  AboutPage,
  BlogPage,
  MySkillsPage,
  WorkPage,
} from "./components";
import styled, { CSS } from "styled-components";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./components/Themes";
import { useState } from "react";
import { YinYang } from "./components/AllSvgs";

function App() {
  const [theme, setTheme] = useState([]);
  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const Center = styled.div`
    position: absolute;
    right:1rem;
    top:1rem;
    cursor: pointer;
    z-index: 3;
    color: ${({ theme }) => theme.text};
  `;

  return (
    <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
      <div>
        <GlobalStyle />
        <Center onClick={themeToggler}>
          <YinYang height="45" width="45"></YinYang>
        </Center>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/AboutPage" component={AboutPage} />
          <Route exact path="/BlogPage" component={BlogPage} />
          <Route exact path="/WorkPage" component={WorkPage} />
          <Route exact path="/MySkillsPage" component={MySkillsPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;

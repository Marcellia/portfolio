import { DarkTheme, LightTheme } from "./components/Themes";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyles";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import {
  Main,
  AboutPage,
  BlogPage,
  MySkillsPage,
  WorkPage,
} from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/AboutPage" component={AboutPage} />
          <Route exact path="/BlogPage" component={BlogPage} />
          <Route exact path="/WorkPage" component={WorkPage} />
          <Route exact path="/MySkillsPage" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;

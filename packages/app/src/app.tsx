import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as FluentProvider } from '@fluentui/react-northstar';
import { ThemeProvider } from 'styled-components';
import { StyledApp, Content, Page } from './App.styles';
import Titlebar from './components/Titlebar';
import Sidebar from './components/Sidebar';
import { Dashboard } from './pages';
import theme from './theme';

const sideMenuItems = [{ name: 'Dashboard', route: '/' }];

export default function App() {
  return (
    <FluentProvider theme={{ siteVariables: theme }}>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Titlebar title="Sohda" />
          <Content>
            <Router>
              <Sidebar menuItems={sideMenuItems} />
              <Page>
                <Switch>
                  <Route path="/" component={Dashboard} />
                </Switch>
              </Page>
            </Router>
          </Content>
        </StyledApp>
      </ThemeProvider>
    </FluentProvider>
  );
}

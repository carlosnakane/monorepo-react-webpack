import React, { FunctionComponent, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, light, GlobalStyles, styled } from '@we/theme';

const AppA = lazy(() => import('@we/app-a'));
const AppB = lazy(() => import('@we/app-b'));

const Loading = () => <span>Loading...</span>;

type RawTopBarProps = {
  className?: string,
}


const RawTopBar: FunctionComponent<RawTopBarProps> = props => (
  <header className={props.className}>
    <h1>Root App</h1>
    <Link className={'menu-item'} to={'/app-a/'}>App A</Link> |
    <Link className={'menu-item'} to={'/app-b/'}>App B</Link>
  </header>
);

const TopBar = styled(RawTopBar)`
  background-color: ${props => props.theme.colors.darkGray};
  margin: -21px -7px 5px -7px;
  padding: 7px;
  .menu-item {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    .current {
      text-decoration: underline;
    }
  }
`;

const App = () => {

  return (
    <ThemeProvider theme={light}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <div>
            <GlobalStyles />
            <TopBar />
            <article>
              <Switch>
                <Route path="/app-a/" component={AppA} />
                <Route path="/app-b/" component={AppB} />
              </Switch>
            </article>
          </div>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}
export default App;

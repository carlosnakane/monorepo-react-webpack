import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, light } from '@we/theme';

const AppA = lazy(() => import('@we/app-a'));
const AppB = lazy(() => import('@we/app-b'));

const Loading = () => <span>Loading...</span>;

const App = () => {

  return (
    <ThemeProvider theme={light}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <div>
            <header>
              <h1>Root App</h1>
              <Link to={'/app-a/'}>App A</Link> |
              <Link to={'/app-b/'}>App B</Link>
            </header>
            <hr />
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

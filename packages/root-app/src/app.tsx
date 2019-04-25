import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider, light } from '@we/theme';

const AppB = lazy(() => import('@we/app-a'));
const AppA = lazy(() => import('@we/app-b'));

const Loading = () => <span>Loading...</span>;

const App = () => {

  return (
    <ThemeProvider theme={light}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <div>
            <header>
              <h1>I'm the house</h1>
              <Link to={'/app-a/'}>Kitchen</Link> |
              <Link to={'/app-b/'}>Bedroom</Link>
            </header>
            <hr />
            <article>
              <Switch>
                <Route path="/app-a/" component={AppB} />
                <Route path="/app-b/" component={AppA} />
              </Switch>
            </article>
          </div>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}
export default App;

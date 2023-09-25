import React from 'react';
import AppA from "@we/app-a";
import AppB from "@we/app-b";
// const AppA = lazy(() => import('@we/app-a'));
// const AppB = lazy(() => import('@we/app-b'));

const App = () => {

  return (
      <div>
          <AppA/>
          <AppB/>
      </div>
  );
}
export default App;

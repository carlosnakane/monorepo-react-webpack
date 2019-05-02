import React, { lazy, Suspense } from 'react';

const AsyncUIComponentA = lazy(() => import('@we/ui-component-a'));
const AsyncUIComponentB = lazy(() => import('@we/ui-component-b'));

const Loading = () => <span>Loading...</span>;

const AppB = () => {

  return (
    <div>
      <h2>App B</h2>
      <Suspense fallback={Loading}>
        <div>
          <div style={{
            width: "50%",
            float: "left"
          }}>
            <AsyncUIComponentA />
          </div>
          <div style={{
            width: "50%",
            float: "left"
          }}>
            <AsyncUIComponentB />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default AppB;
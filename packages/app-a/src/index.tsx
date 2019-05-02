import React, { lazy, Suspense } from 'react';

const AsyncUIComponentA = lazy(() => import('@we/ui-component-a'));

const Loading = () => <span>Loading...</span>;

const AppA = () => {
  return (
    <div>
      <h2>App A</h2>
      <Suspense fallback={Loading}>
        <div>
          <div style={{
              width: "50%",
              float: "left"
            }}>
            <AsyncUIComponentA />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default AppA;

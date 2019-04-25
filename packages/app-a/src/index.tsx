import React, { lazy, Suspense } from 'react';

const AsyncUIComponentA = lazy(() => import('@we/ui-component-a'));
const AsyncUIComponentB = lazy(() => import('@we/ui-component-b'));

const Loading = () => <span>Loading...</span>;

const AppA = () => {
  return (
    <div>
      <h2>App A</h2>
      <Suspense fallback={Loading}>
        <div>
          <div>
            <AsyncUIComponentA color={'Warm'} potency={60} on={false} />
          </div>
          <div>
            <AsyncUIComponentB color={'Black'} />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default AppA;

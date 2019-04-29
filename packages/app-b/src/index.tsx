import React, { lazy, Suspense } from 'react';
import sun from './img-2.jpg';

const AsyncUIComponentA = lazy(() => import('@we/ui-component-a'));
const AsyncUIComponentB = lazy(() => import('@we/ui-component-b'));

const Loading = () => <span>Loading...</span>;

const AppB = () => {
  return (
    <div>
      <h2>App B</h2>
      <Suspense fallback={Loading}>
        <AsyncUIComponentA />
        <AsyncUIComponentB />
        <img src={sun} />
      </Suspense>
    </div>
  )
}

export default AppB;
import React, { lazy, Suspense } from 'react';
import sun from './img.jpg';
import sun2 from './img-2.jpg';

const AsyncUIComponentA = lazy(() => import('@we/ui-component-a'));

const Loading = () => <span>Loading...</span>;

const AppA = () => {
  return (
    <div>
      <h2>App A</h2>
      <Suspense fallback={Loading}>
        <div>
          <div>
            <AsyncUIComponentA />
            <img src={sun} />
            <img src={sun2} />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default AppA;

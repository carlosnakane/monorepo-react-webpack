import React from 'react';
import Box from '@we/box';

const UIComponentA = () => {
  return (
    <div>
      <h3>UIComponentA</h3>
    </div>
  )
};



const BoxedUIComponentA = () => (
  <Box label={'we-ui-componente-a'} labelBackgroundColor={'#2196f3'} labelTextColor={'#000'}>
    <UIComponentA />
  </Box>
 );

export default BoxedUIComponentA;

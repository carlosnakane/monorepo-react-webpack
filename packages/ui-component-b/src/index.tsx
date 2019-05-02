import React from 'react';
import Box from '@we/box';

const UIComponentB = () => {
  return (
    <div>
      <h3>UIComponentB</h3>
    </div>
  )
};



const BoxedUIComponentB = () => (
  <Box label={'we-ui-componente-b'} labelBackgroundColor={'#82c7a5'} labelTextColor={'#FFF'}>
    <UIComponentB />
  </Box>
 );

export default BoxedUIComponentB;

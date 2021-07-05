import React from 'react';
import './style.css';

function Display(props) {
  const { operator, input } = props;
  return (
    <div className='display'>
      <div className='operatorScreen'>
        { operator ? operator : null }
      </div>
      <div className='inputScreen'>
        { input ? input : '0' }
      </div>
    </div>
  );
}

export default Display;
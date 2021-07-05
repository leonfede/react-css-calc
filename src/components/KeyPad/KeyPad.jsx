import React from 'react';
import './style.css';

import { Key } from '../index';

function KeyPad(props) {
  const { onInput } = props;
  
  function keyParser(value) {
    onInput(value);
  }
  
  return (
    <div className='container'>
      <Key value='C' clear handleClick={keyParser}/>
      <Key value='/' colored handleClick={keyParser}/>
      <Key value='*' colored handleClick={keyParser}/>
      <Key value='1' handleClick={keyParser}/>
      <Key value='2' handleClick={keyParser}/>
      <Key value='3' handleClick={keyParser}/>
      <Key value='-' colored handleClick={keyParser}/>
      <Key value='4' handleClick={keyParser}/>
      <Key value='5' handleClick={keyParser}/>
      <Key value='6' handleClick={keyParser}/>
      <Key value='+' sum colored handleClick={keyParser}/>
      <Key value='7' handleClick={keyParser}/>
      <Key value='8' handleClick={keyParser}/>
      <Key value='9' handleClick={keyParser}/>
      <Key value='0' zero handleClick={keyParser}/>
      <Key value='.' handleClick={keyParser}/>
      <Key value='=' equals handleClick={keyParser}/>
    </div>
  );
}

export default KeyPad;
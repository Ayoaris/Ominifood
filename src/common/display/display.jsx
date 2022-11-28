import React from 'react'
import { Displaystyle } from './display.style';


const Display = ({children}) => {
  return (
    <div>
      <Displaystyle> 
      <div class="step-text-box">
       {children}
        </div>
      </Displaystyle>
      
    </div>
  );
}

export default Display

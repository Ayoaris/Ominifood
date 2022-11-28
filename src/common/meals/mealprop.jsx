import React from 'react'
import { Mealpropstyle } from './mealprop.style'; 

const Mealprop = ({children}) => {
  return (
    <div>
      <Mealpropstyle>
        <div class="meal">
          {children}
        </div>
      </Mealpropstyle>
    </div>
  );
}

export default Mealprop

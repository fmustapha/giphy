import React from 'react';

import '../stylesheets/ButtonComponent.css';

const ButtonComponent = props => {
    const {type, label, name } = props
        return ( 
            <button type={type} name={name}>
               {label} 
            </button>
         );
}
 
export default ButtonComponent;
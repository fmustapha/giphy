import React from 'react';

import '../stylesheets/ButtonComponent.css';

const ButtonComponent = props => {
    const {type, label, name, onClick , className} = props
        return ( 
            <button className={className} type={type} name={name} onClick={onClick}>
               {label} 
            </button>
         );
}
 
export default ButtonComponent;
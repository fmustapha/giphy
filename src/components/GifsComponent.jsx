import React from 'react';

const GifsComponent = props => {
    const { url } = props;
    return ( 
        <div className="gifs">
            <img src={url} alt="gif"/>
        </div>
     );
}

export default GifsComponent;
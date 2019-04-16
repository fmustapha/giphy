import React from 'react';
import GifsComponent from './GifsComponent';

import '../stylesheets/HomeComponent.css';

const HomeComponent = props => {
    const gifsData = props.data;
    
        let gifs = gifsData && gifsData.map(
                        gif => <GifsComponent
                            url={gif.images.fixed_height.url}
                            key={gif.id}
                    />);

        return ( 
            <div className="gifs-wrapper">
                {gifs}
            </div>
         );
}
 
export default HomeComponent;
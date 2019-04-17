import React from 'react';
import GifsComponent from './GifsComponent';
import ButtonComponent from './ButtonComponent'

import '../stylesheets/HomeComponent.css';



const HomeComponent = props => {

    const handleClick =(e, gif) => {
        e.preventDefault();
            if(gif) {
                return props.handleGifSave(gif);
            }
            props.handleSaveError('The gif was not selected');
    }

    const { gifs } = props;
    const {gifs:allGifs, loading } = gifs;
    let gifsResult;
        if(loading) {
            return gifsResult = <h2>Loading...</h2>;
        }
        if(!loading && allGifs.length < 1) {
            return gifsResult = <h2>Sorry, no results found for your search</h2>
        }
        gifsResult = allGifs && allGifs.map((gif, index) => 
                        <div key={index}>
                            <GifsComponent
                                url={gif.images.fixed_height.url}
                                key={gif.id}
                            />
                            <ButtonComponent
                                key={index}
                                type="submit"
                                label="Save"
                                name="save"
                                onClick={(e) => handleClick(e,gif)}
                            />
                        </div>);

        return ( 
            <div className="gifs-wrapper">
                {gifsResult}
            </div>
         );
}
 
export default HomeComponent;

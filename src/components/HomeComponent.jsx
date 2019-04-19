import React from 'react';
import GifsComponent from './GifsComponent';
import ButtonComponent from './ButtonComponent'

import '../stylesheets/HomeComponent.css';



const HomeComponent = props => {
    
    const handleClick =(e, gif) => {
        e.preventDefault();
            if(gif) {
                alert('Saved!')
                return props.handleGifSave(gif);
            }
            props.handleSaveError('The gif was not selected');
    }

    const { gifs, loading} = props;
    console.log(gifs, "<--gifs")
    let gifsResult;
        if(loading) {
            return gifsResult = <h2>Loading...</h2>;
        }
        if(!loading && gifs.length < 1) {
            return gifsResult = <h2>Sorry, no results found for your search</h2>
        }
        gifsResult = gifs && gifs.map((gif, index) => 
                        <div key={index}>
                        <ButtonComponent
                                className="btn btn-info"
                                key={index}
                                type="submit"
                                label={<i className="far fa-save"></i>}
                                name="save"
                                onClick={(e) => handleClick(e,gif)}
                            />
                            <GifsComponent
                                url={gif.images.fixed_height.url}
                                key={gif.id}
                            />
                            <p>{gif.title}</p>
                            <p>{gif.username}</p>
                            
                        </div>);

        return ( 
            <div className="gifs-wrapper">
                {gifsResult}
            </div>
         );
}
 
export default HomeComponent;

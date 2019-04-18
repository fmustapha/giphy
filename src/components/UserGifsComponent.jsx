import React from 'react';

//components
import GifsComponent from './GifsComponent';
import ButtonComponent from './ButtonComponent';

// //stylesheet
// import './App.css';

const UserGifsComponent = (props) => {
    const handleClick = (e,id) => {
        e.preventDefault();
        if(id) {
            return props.handleOnDelete(id)
        }
            props.handleOnDeleteError("Unsuccessful...Contact Admin")
    }
    
    const { gifs, loadingUserGifs } = props.userGifs;
    let userGifs;
        if(loadingUserGifs) {
            return userGifs = <h2>Loading user gifs...</h2>;
        }
        if(!loadingUserGifs && gifs && gifs.length < 1) {
            return userGifs = <h2>You have no gifs saved...go Home to save a gif</h2>
        }
        userGifs = gifs && gifs.map((gif, index) => 
                    <div key={index}>
                        <GifsComponent
                            url={gif.images.fixed_height.url}
                            key={gif.id}
                        />
                        <ButtonComponent
                            key={index}
                            type="submit"
                            label="Remove"
                            name="remove"
                            onClick={(e) => handleClick(e,gif.id)}
                        />
                    </div>);

        return ( 
            <div className="gifs-wrapper">
                <div>
                    {userGifs}
                </div>
            </div>
         );
}

export default UserGifsComponent;

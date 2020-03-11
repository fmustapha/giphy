import React from "react";
import GifsComponent from "./GifsComponent";
import ButtonComponent from "./ButtonComponent";

import "../stylesheets/HomeComponent.css";

const HomeComponent = props => {
  const handleClick = (e, gif) => {
    e.preventDefault();
    if (gif) {
      alert("Saved!");
      return props.handleGifSave(gif);
    }
    props.handleSaveError("The gif was not selected");
  };

  const { gifs, loading } = props;
  let gifsResult;
  if (loading) {
    return (gifsResult = <h2>Loading...</h2>);
  }
  if (!loading && gifs.length < 1) {
    return (gifsResult = <h2>Sorry, no results found for your search</h2>);
  }
  gifsResult =
    gifs &&
    gifs.map((gif, index) => (
      <div key={index} className="gif-card">
        <GifsComponent url={gif.images.fixed_height.url} key={gif.id} />
        <div>
          <p>{gif.title}</p>
          {gif.username ? <p>gif.username</p> :  <p>&nbsp;</p>}
        </div>
        <div>
        <ButtonComponent
          className="btn btn-info"
          key={index}
          type="submit"
          label={"Save"}
          name="save"
          onClick={e => handleClick(e, gif)}
        />
        </div>
      </div>
    ));

  return <div className="gifs-wrapper">{gifsResult}</div>;
};

export default HomeComponent;

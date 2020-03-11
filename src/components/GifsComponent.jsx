import React from "react";

const GifsComponent = props => {
  const { url } = props;
  return (
    <div>
      <img src={url} width={"100%"} height={"200px"} alt="gif" />
    </div>
  );
};

export default GifsComponent;

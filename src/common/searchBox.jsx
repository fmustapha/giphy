import React from 'react';

const SearchBox = ({onChange, value}) => {
  return ( 
    <input
      id="search"
      className="form-control mr-sm-2"
      name="search"
      value={value}
      type="text"
      placeholder="Search..."
      onChange={(e) => onChange(e)}
    />
   );
}
 
export default SearchBox;

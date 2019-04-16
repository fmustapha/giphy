import React, { Component } from 'react';

import '../stylesheets/HeaderComponent.css';

class HeaderComponent extends Component {
    state = {  }

    componentDidMount () {

    }
    render() { 
        return ( 
            <div className="wrapper">
                <input type="search" name="search" id="search" placeholder="Search for a gif..."/>
                <button type="submit" name="submit" id="submit"><i className="fa fa-search"></i></button>
            </div>
         );
    }
}
 
export default HeaderComponent;
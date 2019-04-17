import React, { Component } from 'react';
// import SearchComponent from './SearchComponent';

import '../stylesheets/HeaderComponent.css';

class HeaderComponent extends Component {
    
    state = {
        search: ''
    };

    handleChange =(e) => {
        this.setState({ search: e.target.value })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.handleSearch(this.state.search)
        e.currentTarget.reset();
    }

    render() {
    return (
        <div className="search-wrapper">
        <form className="search" onSubmit={this.handleSubmit}>
            <input
                type="search"
                name="search"
                placeholder="Search for a gif..."
                onChange={this.handleChange}
                id="search"
            />
            <button type="submit" name="submit" id="submit"><i className="fa fa-search"></i></button>
        </form>
        </div>
    );
    }
}
 
export default HeaderComponent;

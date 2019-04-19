import React, { Component } from 'react';
import _ from 'lodash';
import ButtonComponent from './ButtonComponent';

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
        <div>
        <ButtonComponent
            className="btn btn-outline-info"
            type="submit"
            label={this.props.page === "home"? "My Saved Gifs" : "Home"}
            name={this.props.page === "home"? "my-gifs" : "home"}
            onClick={(e) => this.props.handlePage(e)}
        />
        </div>
        
        <form className="search" onSubmit={this.handleSubmit}>
           <div> 
                <input
                    type="search"
                    name="search"
                    className="search-input"
                    placeholder="Search for a gif..."
                    onChange={this.handleChange}
                    id="search"
                />
            <ButtonComponent
                className="btn btn-outline-info"
                type="submit"
                label={<i className="fa fa-search" />}
            />
            </div>
            
        </form>
        </div>
    );
    }
}

export default HeaderComponent;

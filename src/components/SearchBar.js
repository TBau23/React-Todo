import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        };
    }

    inputChange = e => {
        this.setState({
            search: e.target.value
        });
        this.props.searchFor(this.state.search)
    }


render() {
    return (
        <div className="search-bar">
            <form >
                <label>Search for Tasks </label>
                <input 
                type='text'
                name='search'
                value={this.state.search}
                onChange={this.inputChange}
                />
                <button>Search</button>
            </form>
        </div>
    )
}
}

export default SearchBar;
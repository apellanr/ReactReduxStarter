import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={(event) => console.log('input change: ', event.target.value)}/>;
    }

    handleInputChange(event) {
        console.log('input change: ', event.target.value);
    }
}

export default SearchBar;


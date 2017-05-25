import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBXbUnmIGk89-wbpZxX9P3OtjAszxJRXTI';

// Create a new component. This component should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
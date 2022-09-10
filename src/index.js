import React from 'react';
import ReactDOM  from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCNPw5QamFHBgWGuHdkQo4dibIqV7mGVUU'; //API Youtube

//Create a new component that produces some HTML
const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

//Show this component on the page 
ReactDOM.render(<App />, document.querySelector('.container'));

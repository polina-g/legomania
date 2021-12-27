import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

const {REACT_APP_BASE_URL, REACT_APP_API_KEY} = process.env;

const Home = () => { 
    // SearchType -> Chosen type from the dropdown menu. Currently sets 'themes' as default, however we can change this if needed.
    const [searchType, setSearchType] = useState('themes');
    // SeatchInput -> user's input in the search bar itself
    const [searchInput, setSearchInput] = useState('');
    // Keeps the current array of data based on the results of the fetch request
    const [data, setData] = useState([])
    // list - current filtered list of items based on the user's search input
    const [list, setList] = useState([])

    //API call based on searchType
    const getData = async () => {
        const response = await fetch(`${REACT_APP_BASE_URL}/${searchType}/?key=${REACT_APP_API_KEY}`);
        const data = await response.json();
        setData(data.results);
    }

    // Gets the data and filters is based every time the chosen search type in the dropdown menu changes
    useEffect(() => {
        getData();
        filterData();
    }, [searchType]);


    // Call the filter data function evety time the user input changes
    useEffect(() => {
        filterData();
    }, [searchInput]);


    // Filters the data based on the current user input and creates an array of <li> items. This is temporary for testing purposes, later we will generate the result box component for every item in the filtered array. 
    const filterData = () => {
        let filteredData = data.filter(el => el.name.includes(searchInput));
        let list = filteredData.map((el, idx) => {
            return (<li id={idx}>{el.name}</li>);
        });

        //Updates the list state
        setList(list);
    }

    return (
        <main>
            <h1>Home Page</h1>
            <SearchBar setSearchType={setSearchType} setSearchInput={setSearchInput} />
            {list}
        </main>
    );
};

export default Home;
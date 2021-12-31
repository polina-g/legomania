import './SearchStyles.scss';

const SearchBar = ({setSearchType, setSearchInput}) => {
    // sets the state of search input to the input value
    const handleInput = (event) => {
        setSearchInput(event.target.value)
    };

    //sets the state of the search type based on the picked option from the dropdown menu
    const handleSelect = (event) => {
        setSearchType(event.target.value)
    };

    return(
        <div className='search-container'>
            <form className='search-form'>
                <input type="text" onChange={handleInput} name="searchInput"/>
                <select onChange={handleSelect} name="searchType">
                    <option value="themes">Themes</option>
                    <option value="sets">Sets</option>
                    <option value="parts">Parts</option>
                    <option value="minifigs">Mini Figures</option>
                </select>
            </form>
        </div>
    );
}

export default SearchBar;

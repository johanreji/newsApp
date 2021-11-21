import './SearchBox.css';
import SearchIcon from '../Assets/search_icon.svg';

const SearchBox = ({ filterData, filterText }) => {
    return <div className='search-box-container'>
        <img className="search-icon" src={SearchIcon} alt="" />
        <input className="search-box" value={filterText} type="text" placeholder="Search for keywords, Authors" onChange={(e) => { filterData(e.target.value) }} />
    </div>;
}

export default SearchBox;
import CategoryList from "./CategoryList";
import SearchBox from "../UI/SearchBox";
import NewsList from "./NewsList";
import './News.css';
import { useCallback, useState } from "react";

const API_KEY = 'a5cf886a8dd84801a01c8b5bd0da1b0d';


const News = () => {
    const [news, setNews] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filterText, setFilterText] = useState('');

    const fetchNews = async (url) => {
        console.log('fetchNews')
        setIsLoading(true);
        setIsError(false);
        try {
            let response = await fetch(url.replace('API_KEY', API_KEY));
            let data = await response.json();
            console.log('response == ', response)
            if (data && data.status == 'ok' && Array.isArray(data.articles)) {
                console.log('setting news state')
                setNews(data.articles);
            } else {
                setIsError(true);
            }
        } catch (error) { setIsError(true); };
        setIsLoading(false);
    }


    console.log('news == ', news)
    return <div className="news-container">
        <h1>News Today </h1>
        <CategoryList fetchNews={fetchNews} />
        <SearchBox filterData={(text) => setFilterText(text.toLowerCase())} />
        <NewsList isError={isError} isLoading={isLoading} newsData={news} filterText={filterText} />
    </div>
}

export default News;
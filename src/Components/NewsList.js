import './NewsList.css';

const NewsItem = ({ data }) => {
    let date = new Date(data.publishedAt).toLocaleString();
    return <div className="news-item-container">
        <img className="news-image" src={data.urlToImage} alt="" />
        <div className="news-text">
            <div className="news-header">
                {data.title}
            </div>
            <div className="news-meta">
                <span>{data.author}</span> ● <span>{date}</span>
            </div>
            <div className="news-content">
                {data.description}
            </div>
        </div>

    </div>
}

const NewsList = ({ newsData, filterText, isError, isLoading }) => {
    let filteredData = filterText ? newsData.filter(data => data.author && data.title && (data.author.toLowerCase().includes(filterText) || data.title.toLowerCase().includes(filterText))) : newsData;
    console.log('isLoading--', isLoading)
    return <div>
        {isLoading && <div>Loading...</div>}
        {isError && !isLoading && <div>Something went wrong!</div>}
        {!isError && !isLoading && filteredData.map((data) => <NewsItem key={`${data.author}${data.publishedAt}`} data={data} />)}
    </div>
}
export default NewsList;
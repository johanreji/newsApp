import { useState } from "react";
import './AddCategory.css';

const AddCategoryForm = ({ handleCategoryAddition, categories }) => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState("https://newsapi.org/v2/everything?q=business&apiKey=API_KEY");
    const [isNameError, setNameError] = useState('');
    const [isUrlError, setUrlError] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (name == "" || categories.some(category => category.name == name)) {
            setNameError(true);
            return;
        }
        if (url == "" || categories.some(category => category.url == url)) {
            setUrlError(true);
            return;
        }
        handleCategoryAddition(name, url)
    }
    return <div className="form-container">
        <div className='form-header'>Add Category</div>
        <form onSubmit={handleFormSubmit}>
            <input className='form-input' placeholder="Category Name" onChange={(e) => setName(e.target.value)} />
            {isNameError && <span className="form-error">Enter an unique valid name</span>}
            <input className='form-input' placeholder="API URL" value={url} onChange={(e) => setUrl(e.target.value)} />
            {isUrlError && <span className="form-error">Enter an valid URL</span>}
            <input className='form-submit' type="submit" value="Add" />
        </form>
    </div>
}

export default AddCategoryForm;
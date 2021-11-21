import { useState } from "react";
import './AddCategory.css';

const AddCategoryForm = ({ handleCategoryAddition, categories }) => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState("");
    const [isNameError, setNameError] = useState(false);
    const [isUrlError, setUrlError] = useState(false);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setNameError(false);
        setUrlError(false);
        let isError = false;
        if (name === "" || categories.some(category => category.name === name)) {
            setNameError(true);
            isError = true;
        }
        if (url === "" || categories.some(category => category.url === url)) {
            setUrlError(true);
            isError = true;
        }
        if (!isError)
            handleCategoryAddition(name, url)
    }
    return <div className="form-container">
        <div className='form-header'>Add Category</div>
        <form onSubmit={handleFormSubmit}>
            <input className='form-input' placeholder="Category Name" onChange={(e) => setName(e.target.value)} />
            {isNameError && <div className="form-error">Enter an unique valid name</div>}
            <input className='form-input' placeholder="API URL" value={url} onChange={(e) => setUrl(e.target.value)} />
            {isUrlError && <div className="form-error">Enter an unique valid URL</div>}
            <input className='form-submit' type="submit" value="Add" />
        </form>
    </div>
}

export default AddCategoryForm;
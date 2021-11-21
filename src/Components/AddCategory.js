import { useState } from "react";
import './AddCategory.css';

const AddCategoryForm = ({ handleCategoryAddition }) => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleCategoryAddition(name, url)
    }
    return <div className="form-container">
        <div className='form-header'>Add Category</div>
        <form onSubmit={handleFormSubmit}>
            <input className='form-input' placeholder="Category Name" onChange={(e) => setName(e.target.value)} />
            <input className='form-input' placeholder="API URL" onChange={(e) => setUrl(e.target.value)} />
            <input className='form-submit' type="submit" value="Add" />
        </form>
    </div>
}

export default AddCategoryForm;
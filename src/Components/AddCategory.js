import { useState } from "react";

const AddCategoryForm = ({ handleCategoryAddition }) => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleCategoryAddition(name, url)
    }
    return <div>
        <form onSubmit={handleFormSubmit}>
            <label>Name</label>
            <input onChange={(e) => setName(e.target.value)} />
            <label>URL</label>
            <input onChange={(e) => setUrl(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
}

export default AddCategoryForm;
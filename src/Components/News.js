import { useEffect, useState } from "react";
import Modal from '../UI/Modal';
import AddCategoryForm from './AddCategory';
const API_KEY = 'a5cf886a8dd84801a01c8b5bd0da1b0d';
const INITIAL_CATEGORIES = [{
    name: "techcrunch",
    url: 'https://newsapi.org/v2/everything?q=techcrunch&apiKey=API_KEY'
}]
const News = () => {

    const [categories, addCategory] = useState(INITIAL_CATEGORIES);
    const [showModal, setShowModal] = useState(false);
    const [activeCategory, setActiveCategory] = useState("techcrunch");
    useEffect(() => {
        fetch(categories.find(cat => cat.name == activeCategory).url.replace('API_KEY', API_KEY)).then((resp) => console.log('ata=== ', resp))
    }, [activeCategory])
    console.log('categories == ', categories)
    const handleCategoryAddition = (name, url) => {
        addCategory(prevCats => [...prevCats, { name, url }]);
        setShowModal(false)
        setActiveCategory(name)
    }
    return <div>
        <h1>News Today </h1>

        <div>{
            categories.map(category => <div onClick={() => setActiveCategory(category.name)}>{category.name}</div>)
        }</div>
        <button onClick={() => setShowModal(true)}>add</button>
        {showModal && <Modal>
            <AddCategoryForm handleCategoryAddition={handleCategoryAddition} />
        </Modal>}
        <div>
            <input type="text"></input>
        </div>
        <div>News</div>
    </div>
}

export default News;
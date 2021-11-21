import { useEffect, useState } from "react";
import Modal from '../UI/Modal';
import AddCategoryForm from './AddCategory';
import './CategoryList.css';
import AddIcon from '../Assets/add_icon.svg';

const defaultCategory = {
    name: 'TechCrunch',
    url: `https://newsapi.org/v2/everything?q=TechCrunch`
};
const INITIAL_CATEGORIES = [defaultCategory];

const CategoryList = ({ fetchNews }) => {
    const [categories, addCategory] = useState(INITIAL_CATEGORIES);
    const [showModal, setShowModal] = useState(false);
    const [activeCategory, setActiveCategory] = useState(defaultCategory);

    useEffect(() => {
        fetchNews(activeCategory.url)
    }, [fetchNews, activeCategory]);

    const handleCategoryAddition = (name, url) => {
        addCategory(prevCats => [...prevCats, { name, url }]);
        setShowModal(false);
        setActiveCategory({ name, url })
    }

    return <div className="category-list">
        {categories.map(category =>
            <div className={`category ${category.name === activeCategory.name && 'active'}`} key={category.name} onClick={() => setActiveCategory(category)}>{category.name}</div>
        )}
        <button className={`category add-button ${categories.length === 5 && 'disabled'}`} onClick={() => categories.length !== 5 && setShowModal(true)}>
            <img src={AddIcon} alt=""></img>
        </button>
        {showModal && <Modal handleOutsideClick={() => setShowModal(false)}>
            <AddCategoryForm categories={categories} handleCategoryAddition={handleCategoryAddition} />
        </Modal>}
    </div>
}
export default CategoryList;
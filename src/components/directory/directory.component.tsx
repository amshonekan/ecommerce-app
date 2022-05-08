// import CategoryItem from './category-item/category-item.component';
import CategoryItem from "../category-item/category-item.component";
import { Category } from "../../types/category.type";
import './directory.styles.scss';

const Directory = ({categories}: {categories: Category[]}) => {
    return (
        <div className="directory-container">
            {categories.map((category: Category) => (
                <CategoryItem key = {category.id} category={category}/>
            ))}
            
        </div>
    )
}

export default Directory
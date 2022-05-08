import { Category } from '../../../types/category.type';
import './category-item.styles.scss';

const CategoryItem = ({ category }: { category: Category }) => {
    const { imageUrl, title } = category;
    return (
        <div className="category-container">
            {/* { <img />} */}
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Explore range</p>
            </div>
        </div>
    )
}

export default CategoryItem;
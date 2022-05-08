import { Category } from '../../../types/category.type';
import './categories.styles.scss';

const Categories: Category[] = [
    {
        id: 1,
        title: 'Prints',
        imageUrl: '/paper-icon.png',
    },
    {
        id: 2,
        title: 'Journals',
        imageUrl: '/journal-icon.png',
    },
    {
        id: 3,
        title: 'Stickers',
        imageUrl: '/sticker-icon.png',
    },
]

export default Categories;
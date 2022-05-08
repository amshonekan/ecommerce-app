import { isTemplateExpression } from 'typescript';
import { Navigation } from '../../types/navigation.type';
import NavigationBarItem from './navigation-bar-item/navigation-bar-item.component';
import './navigation-bar.styles.scss';

const NavigationBar = () => {

    const navigation: Navigation[] = [
        {
            id: 1,
            title: 'Home',
            link: '',
        },
        {
            id: 2,
            title: 'About',
            link: '',
        },
        {
            id: 3,
            title: 'Blog',
            link: '',
        },
        {
            id: 4,
            title: 'Shop',
            link: '',
        },
    ]

    return (
        <div className="navigation-bar">
            <div className='navigation-bar-container'>
            <ul>
                {navigation.map((navItem: Navigation) => (
                    <NavigationBarItem key = {navItem.id} navItem={navItem}/>
                ))}
            </ul>
            </div>
        </div>
    )

}

export default NavigationBar;
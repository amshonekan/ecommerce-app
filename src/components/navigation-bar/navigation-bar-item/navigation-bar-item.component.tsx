import { Navigation } from "../../../types/navigation.type"

const NavigationBarItem = ({ navItem }: {navItem: Navigation}) => {
    const { title, link } = navItem
    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    )
}

export default NavigationBarItem
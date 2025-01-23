import { NavLink } from 'react-router-dom'

const MainNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/chi-siamo'>Chi Siamo</NavLink>
                </li>
                <li>
                    <NavLink to='/lista-post'>Lista post</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav
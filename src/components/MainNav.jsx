import { NavLink } from 'react-router-dom'

const MainNav = () => {
    return (
        <nav className='col-3 mt-5 mx-auto'>
            <ul className='list-group-horizontal list-group-flush d-flex justify-content-between'>
                <li className='list-group-item'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to='/chi-siamo'>Chi Siamo</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to='/lista-post'>Lista post</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav
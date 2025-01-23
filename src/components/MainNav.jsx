import { NavLink } from 'react-router-dom'

const pagesList = [
    { id: self.crypto.randomUUID(), path: '/', title: 'Home' },
    { id: self.crypto.randomUUID(), path: '/chi-siamo', title: 'Chi Siamo' },
    { id: self.crypto.randomUUID(), path: '/lista-post', title: 'Lista Post' }
]

const MainNav = () => {
    return (
        <nav className='col-3 mt-5 mx-auto'>
            <ul className='list-group-horizontal list-group-flush d-flex justify-content-between'>
                {pagesList.map(page => (
                    <li key={page.id} className='list-group-item'>
                        <NavLink to={page.path}>{page.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainNav
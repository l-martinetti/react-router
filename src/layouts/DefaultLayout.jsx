import { Outlet } from 'react'

const DefaultLayout = () => {
    return (
        <>
            <header></header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout
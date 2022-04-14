import { Outlet } from "react-router-dom";
import { matchPath, useLocation } from 'react-router-dom'

const menus = [
    {
        id: 1,
        title: 'What is mindful eating?',
        path: '/index'
    },
    {
        id: 2,
        title: 'How to do mindful eating?',
        path: '/exercise'
    },
    {
        id: 3,
        title: 'More About Eating Healthily',
        path: '/more'
    },
    {
        id: 4,
        title: 'Resources',
        path: '/reference'
    },
    {
        id: 6,
        title: 'Contact Me',
        path: '/form'
    }
]

export default function Layout() {
    const { pathname } = useLocation();
    const isActive = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false);

    return <>
        <a className="skip" href="#skip">Skip to Main Content</a>
        <header>
            <nav className="navbar">
                <ul>
                    {menus.map((menu) => {
                        return <li className={isActive(menu.path) ? 'current-page' : ''}><a href={menu.path}>{menu.title}</a></li>
                    })}
                </ul>
            </nav>
        </header>
        <Outlet />
        {pathname !== '/form' && <footer>
            <p>Lavender Li &copy; 2022</p>
            <p>Powered with <i className="fab fa-github"></i></p>
        </footer>}
    </>
}
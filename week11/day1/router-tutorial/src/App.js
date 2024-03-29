import { Outlet, Link } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <h1>Bookkeeper!</h1>
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                }}
            >
                <Link to='/invoices'>invoices</Link> |{' '}
                <Link to='/expenses'>Expenses</Link>
            </nav>
            <Outlet />
        </div>
    )
}

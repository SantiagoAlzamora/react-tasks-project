import { Link } from 'react-router-dom'
import '../../styles/navbar.scss'

export default function NavBar() {


    return (
        <div>
            <nav className='navbar'>
                <section className='navbar-left-section'>
                    <i>📋</i>
                </section>
                <section className='navbar-right-section'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/tasks'}>Task list</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                </section>
            </nav>
        </div>
    )
}

import style from './navigation.module.css';
import { NavLink} from 'react-router-dom';
export function Navigation() {
    return <nav className ={style.nav}>
            <NavLink exact
                to="/"
                className={style.link}
                activeClassName ={style.activeLink}
            >HomePage</NavLink>
            <NavLink to="/movies"
                className={style.link}
                activeClassName={style.activeLink}
            >MoviesPage</NavLink>
        </nav>
}
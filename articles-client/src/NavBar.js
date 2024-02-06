import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Главная страница</Link>
                </li>
                <li>
                    <Link to="/about">О себе</Link>
                </li>
                <li>
                    <Link to="/articles">Статьи</Link>
                </li>
            </ul>
            <div className="nav-right">
                {user
                  ? <button onClick={() => {
                    signOut(getAuth());
                  }}>Выйти из системы</button>
                  : <button onClick={() => {
                    navigate('/login');
                  }}>Войти в систему</button>
                }
            </div>
        </nav>

 );
};

export default NavBar;
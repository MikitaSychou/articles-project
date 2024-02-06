import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const logIn = async () => {
        try {
           await signInWithEmailAndPassword(getAuth(), email, password);
           navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }


    return (
        <>
        <h1>Log In</h1>
        {error && <p className="error">{error}</p>}
        <input
         placeholder="Ваш email"
         value={email}
         onChange={e => setEmail(e.target.value)}
        />
        <input
         type="password"
         placeholder="Ваш пароль"
         value={password}
         onChange={e => setPassword(e.target.value)}
          />
        <button onClick={logIn}>Войти в систему</button>
        <Link to="/create-account">Нету аккаунта? Создайте его здесь</Link>
        </>
    );
};

export default LoginPage;
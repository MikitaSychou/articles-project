import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const navigate = useNavigate();


    const createAccount = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Password and confirm password do not match');
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    };


    return (
        <>
        <h1>Create account</h1>
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
          <input
         type="password"
         placeholder="Повторите Ваш пароль"
         value={confirmPassword}
         onChange={e => setConfirmPassword(e.target.value)}
          />
        <button onClick={createAccount}>Создать аккаунт</button>
        <Link to="/login">Уже есть аккаунт? Войдите в систему</Link>
        </>
    );
};

export default CreateAccountPage;
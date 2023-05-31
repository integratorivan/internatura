import { Link } from 'react-router-dom';

export const Login = () => (
  <div>
    <h1>Login page</h1>
    <input placeholder="Логин" />
    <input placeholder="Пароль" />
    <button type="button">Войти</button>
    <Link to="/">Вернуться на главную</Link>
  </div>
);

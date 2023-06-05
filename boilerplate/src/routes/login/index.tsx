import { Link } from 'react-router-dom';

import './style.css';

export const Login = () => (
  <div className="login_container">
    <h1>Войти в систему</h1>
    <Link to="/">Вернуться на главную</Link>
  </div>
);

import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components';
import './index.css';

export const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>Добро пожаловать!</h1>
        <Button onClick={() => navigate('/login')} type="button">
          Войти
        </Button>
        <br />
      </div>
    </>
  );
};

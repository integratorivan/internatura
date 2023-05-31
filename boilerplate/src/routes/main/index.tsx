import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { Posts } from './types';

import './index.css';
import { Button } from '@/components';

export const Main = () => {
  const { data } = useSWR<Posts[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <Button onClick={() => navigate('/login')} type="button">
          Войти
        </Button>
        {
          data?.map((post) => (
            <p key={post.id}>
              {post.userId}
            </p>
          ))
        }
      </div>
    </>
  );
};

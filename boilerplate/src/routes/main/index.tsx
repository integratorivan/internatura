import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

import { Posts } from './types';

import './index.css';
import { Button } from '@/components';

export const Main = () => {
  const { data } = useSWR<Posts>(
    'https://jsonplaceholder.typicode.com/posts/1',
  );

  return (
    <>
      <h2>
        <Link to="/login">Перейти на страницу логина</Link>
      </h2>
      <div className="container">
        <Button onClick={() => console.log(1)} type="button">
          Привет,
          { data?.title }
        </Button>
      </div>
    </>
  );
};

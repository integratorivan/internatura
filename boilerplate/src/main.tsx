import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/rootRouter';
import { SWRConfig } from 'swr';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={
      {
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }
    }
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>,
);

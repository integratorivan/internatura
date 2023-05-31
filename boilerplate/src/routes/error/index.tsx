import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <div id="error-page">
      <h1>Ой!</h1>
      <p>А у нас нет такого роута!</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

import { useRouteError } from 'react-router-dom';


export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Opa!</h1>
      <p>Parece que ocorreu um erro!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
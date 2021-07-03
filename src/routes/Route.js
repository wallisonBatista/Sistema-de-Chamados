import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const loading = false;
  const signed = false;

  //se login igual a true então retorna...
  if (loading) {
    return <div></div>;
  }
  //se não está logado ou a rota é privada retorna para a home
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  //se está logado ou a rota não é privada retorna...
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

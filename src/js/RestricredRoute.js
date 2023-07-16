import { Navigate } from 'react-router-dom';
import { useAuthRoute } from 'hook/useAuthRoute';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuthRoute();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

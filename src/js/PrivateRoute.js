import { Navigate } from 'react-router-dom';
import { useAuthRoute } from 'hook/useAuthRoute';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isChecking } = useAuthRoute();
  const shouldRedirect = !isLoggedIn && !isChecking;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

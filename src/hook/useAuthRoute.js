import { useSelector } from 'react-redux';
import {
  selectIsChecking,
  selectIsLoggedIn,
  selectUser,
} from 'redux/auth/selectors';

export const useAuthRoute = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isChecking = useSelector(selectIsChecking);
  return {
    user,
    isLoggedIn,
    isChecking,
  };
};

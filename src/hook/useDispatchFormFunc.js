import { useDispatch } from 'react-redux';

export const useDispatchFormFunc = (input) => {
  const dispatch = useDispatch();
  return dispatch(input);
};

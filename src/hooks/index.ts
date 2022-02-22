import useSession from './useSession';
import {AppDispatch, RootState} from '../redux/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import useLoggedInUser from './useLoggedInUser';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export {useSession, useLoggedInUser};

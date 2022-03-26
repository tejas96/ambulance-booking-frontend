import {atom} from 'recoil';
import {User} from '../../model';

export const loggedInUser = atom<null | User>({
  key: 'loggedInUser',
  default: null,
});

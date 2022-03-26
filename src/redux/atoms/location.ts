import {atom} from 'recoil';
import {SocketUser} from '../../model';

export const currentCity = atom<null | string>({
  key: 'currentCity',
  default: null,
});

export const joinedUsers = atom<null | Array<SocketUser>>({
  key: 'joinedUsers',
  default: null,
});

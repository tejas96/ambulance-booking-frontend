import {atom} from 'recoil';
import {Socket} from 'socket.io-client';

export const socket = atom<null | Socket>({
  key: 'socket',
  default: null,
});

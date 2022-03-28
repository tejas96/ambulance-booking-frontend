import {atom} from 'recoil';
import {BookingModal} from '../../model';

export const ambulanceBookRequest = atom<null | BookingModal>({
  key: 'ambulanceBookRequest',
  default: null,
});

import {selectorFamily} from 'recoil';
import {HospitalAPI} from '../../api';
import {HospitalRegistration} from '../../model';
import {fetchHospitalsByCityId} from '../recoilAtomsId';

export const fetchHospitalsByCityName = selectorFamily({
  key: fetchHospitalsByCityId,
  get: (cityName: string) => async (): Promise<HospitalRegistration[]> => {
    const response = await HospitalAPI.getHospitalsListByCityName(cityName);
    if (!response) {
      throw new Error('Record Not found');
    }
    const hospitals: HospitalRegistration[] = response.data.data;
    return hospitals;
  },
});

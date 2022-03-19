import {useCallback, useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useGeoLocation} from '../../hooks';
import {HospitalRegistration} from '../../model';
import {dummyCord, HealthAssessment, HealthAssessmentModel} from './const';

interface BottomSheetFormState {
  healthAssessment: HealthAssessmentModel[];
  hospitalRecord: HospitalRegistration | null;
}

const useAmbulanceBook = () => {
  const refRBSheet = useRef<RBSheet>(null);
  const {currentPosition} = useGeoLocation();
  const [dummyCords] = useState(dummyCord);

  const [bottomSheetForm, setBottomSheetForm] = useState<BottomSheetFormState>({
    healthAssessment: HealthAssessment,
    hospitalRecord: null,
  });

  const handleBookAmbulance = useCallback(() => {
    refRBSheet.current?.open();
  }, []);

  const handleConfirmBooking = useCallback(() => {
    const payload = {
      hospital: bottomSheetForm.hospitalRecord,
      healthAssessment: bottomSheetForm.healthAssessment.filter(
        item => item.status,
      ),
    };
    console.log(payload);
  }, [bottomSheetForm]);
  return {
    currentPosition: currentPosition,
    handleBookAmbulance,
    dummyCords,
    refRBSheet,
    bottomSheetForm,
    setBottomSheetForm,
    handleConfirmBooking,
  };
};

export default useAmbulanceBook;

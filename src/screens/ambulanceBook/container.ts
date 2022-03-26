import {useCallback, useEffect, useRef, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRecoilState} from 'recoil';
import {LoggedInUser, LocationAtoms} from '../../redux/atoms';
import {useGeoLocation, useSession, useSocket} from '../../hooks';
import {
  BookingModal,
  HospitalRegistration,
  HealthAssessmentModel,
  SocketUser,
} from '../../model';
import {HealthAssessment} from './const';

interface BottomSheetFormState {
  healthAssessment: HealthAssessmentModel[];
  hospitalRecord: HospitalRegistration | null;
}

const useAmbulanceBook = () => {
  const refRBSheet = useRef<RBSheet>(null);
  const {currentPosition} = useGeoLocation();
  const {user} = useSession();
  const {socket} = useSocket();
  const [loggedInUser] = useRecoilState(LoggedInUser.loggedInUser);
  const [currentCity] = useRecoilState(LocationAtoms.currentCity);
  const [joinedDrivers] = useRecoilState(LocationAtoms.joinedUsers);
  const [bottomSheetForm, setBottomSheetForm] = useState<BottomSheetFormState>({
    healthAssessment: HealthAssessment,
    hospitalRecord: null,
  });

  useEffect(() => {
    if (user && loggedInUser && currentPosition.position) {
      const socketUser: SocketUser = {
        userId: user.uid,
        name: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
        city: currentCity || '',
        userRole: loggedInUser.useRole,
        lat: currentPosition.position.coords.latitude || 0,
        long: currentPosition.position.coords.longitude || 0,
        room: currentCity || '',
        phoneNumber: user.phoneNumber || '',
      };
      socket?.emit('room', socketUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition, user, loggedInUser]);

  const handleBookAmbulance = useCallback(() => {
    refRBSheet.current?.open();
  }, []);

  const handleConfirmBooking = useCallback(() => {
    const payload: BookingModal = {
      hospital: bottomSheetForm.hospitalRecord,
      healthAssessment: bottomSheetForm.healthAssessment.filter(
        item => item.status,
      ),
      bookingLocation: currentPosition.position?.coords || null,
    };
    socket?.emit('bookAmbulance', payload);
  }, [bottomSheetForm, currentPosition, socket]);
  return {
    currentPosition: currentPosition,
    handleBookAmbulance,
    refRBSheet,
    bottomSheetForm,
    setBottomSheetForm,
    handleConfirmBooking,
    joinedDrivers,
  };
};

export default useAmbulanceBook;

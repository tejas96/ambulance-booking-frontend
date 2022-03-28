import Geolocation from 'react-native-geolocation-service';

export interface Ride {
  amount: number;
  from: {
    latitude: number;
    longitude: number;
  };
  to: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
}

export type User = {
  displayName?: string | undefined | null;
  email?: string | undefined | null;
  metadata?: any | undefined | null;
  phoneNumber: string | undefined | null;
  firstName: string;
  lastName: string;
  photoURL?: string | undefined | null;
  emailVerified?: boolean;
  useRole: UserRole;
  gender: string;
  rides?: Array<Ride>;
  status?: boolean;
};

export default User;

export enum UserRole {
  DRIVER = 'DRIVER',
  PASSENGER = 'PASSENGER',
}

export interface Location {
  latitude: number;
  longitude: number;
  city?: string;
  state?: string;
  country?: string;
  pinCode?: string;
  locality?: string;
}

export interface HospitalRegistration {
  id?: string;
  location: Location | undefined;
  hospitalName: string;
  description: string;
}

export type Response = {
  status?: number;
  message: string;
  data: any;
  error: any;
};

export interface SocketUser {
  id?: string;
  name: string;
  city: string;
  userId: string;
  userRole: UserRole;
  lat: number;
  room: string;
  long: number;
  phoneNumber: string;
}

export interface HealthAssessmentModel {
  id: number;
  label: string;
  description?: string;
  status: boolean;
}

export type BookingModal = {
  hospital: HospitalRegistration | null;
  healthAssessment: Array<HealthAssessmentModel> | null;
  bookingLocation: Geolocation.GeoCoordinates | null;
  userId: string;
};

export type userIdListenerPayload = {
  type: 'booking' | 'tracking';
  payload: any;
};

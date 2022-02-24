export type User = {
  displayName?: string | undefined | null;
  email?: string | undefined | null;
  metadata?: any | undefined | null;
  phoneNumber?: string | undefined | null;
  uid?: string | undefined | null;
  firstName: string;
  lastName: string;
  role: UserRole;
  gender?: string;
};

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

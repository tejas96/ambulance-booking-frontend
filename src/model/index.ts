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

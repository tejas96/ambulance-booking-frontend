import {HospitalRegistration, HealthAssessmentModel} from 'src/model';

export const HealthAssessment: HealthAssessmentModel[] = [
  {
    id: 1,
    label: 'Oxygen cylinder',
    status: false,
  },
  {
    id: 2,
    label: 'Blood Bag',
    status: false,
  },
  {
    id: 3,
    label: 'ventilator',
    status: false,
  },
  {
    id: 4,
    label: 'Blood A+',
    status: false,
  },
  {
    id: 5,
    label: 'Blood B+',
    status: false,
  },
  {
    id: 6,
    label: 'Blood A-',
    status: false,
  },
  {
    id: 7,
    label: 'Blood B-',
    status: false,
  },
  {
    id: 8,
    label: 'Blood AB+',
    status: false,
  },
  {
    id: 9,
    label: 'Blood AB-',
    status: false,
  },
  {
    id: 10,
    label: 'Blood O+',
    status: false,
  },
  {
    id: 11,
    label: 'Blood O-',
    status: false,
  },
];

export const dummyHospitalRecords: HospitalRegistration[] = [
  {
    id: '1',
    hospitalName: 'Hospital 1',
    description: 'Address 1',
    location: {
      latitude: 16.98675,
      longitude: 74.620028,
    },
  },
  {
    id: '2',
    hospitalName: 'Hospital 2',
    description: 'Address 1',
    location: {
      latitude: 16.98675,
      longitude: 74.620028,
    },
  },
  {
    id: '3',
    hospitalName: 'Hospital 2',
    description: 'Address 1',
    location: {
      latitude: 16.98675,
      longitude: 74.620028,
    },
  },
];

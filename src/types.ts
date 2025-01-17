export interface Client {
  id: string;
  name: string;
  clinicianName: string;
  clientType: 'Individual' | 'Couple' | 'Family' | 'Child' | 'Group';
  lastSession: string;
  unsavedNotes: number;
}

export interface ClientFormData {
  clientType: 'Individual' | 'Couple';
  name1: string;
  name2?: string;
  pronouns?: 'He/Him' | 'She/Her' | 'They/Them';
  yearOfBirth?: string;
  diagnosis: string;
  isHighRisk: boolean;
  extraNotes?: string;
}

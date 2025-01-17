export type ClientType = 'Individual' | 'Couple' | 'Family' | 'Child' | 'Group';

export interface Client {
  id: string;
  name: string;
  clientType: ClientType;
  lastSession: Date;
  unsavedNotes: number;
  clinicianName: string;
  isActive: boolean;
  isHighRisk?: boolean;
  diagnosis?: string;
  pronouns?: string;
  yearOfBirth?: number;
  extraNotes?: string;
}

export interface ClientFormData {
  clientType: ClientType;
  name: string;
  name2?: string;
  pronouns?: string;
  yearOfBirth?: number;
  diagnosis?: string;
  isHighRisk: boolean;
  extraNotes?: string;
}

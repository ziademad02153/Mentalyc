import type { Meta, StoryObj } from '@storybook/react';
import ClientTable from '../components/ClientTable/ClientTable';

interface Client {
  id: string;
  name: string;
  clinician: string;
  type: string;
  lastSession: string;
  unsavedNotes: number;
  isHighRisk?: boolean;
}

const mockClients: Client[] = [
  {
    id: '1',
    name: 'John Doe',
    clinician: 'Dr. Smith',
    type: 'Individual',
    lastSession: 'Oct 31, 2023',
    unsavedNotes: 3,
    isHighRisk: true,
  },
  {
    id: '2',
    name: 'Jane & John Smith',
    clinician: 'Dr. Smith',
    type: 'Couple',
    lastSession: 'Oct 30, 2023',
    unsavedNotes: 1,
  },
  {
    id: '3',
    name: 'Smith Family',
    clinician: 'Dr. Johnson',
    type: 'Family',
    lastSession: 'Oct 29, 2023',
    unsavedNotes: 2,
  },
  {
    id: '4',
    name: 'Tommy Wilson',
    clinician: 'Dr. Brown',
    type: 'Child',
    lastSession: 'Oct 28, 2023',
    unsavedNotes: 5,
    isHighRisk: true,
  },
  {
    id: '5',
    name: 'Support Group A',
    clinician: 'Dr. Wilson',
    type: 'Group',
    lastSession: 'Oct 27, 2023',
    unsavedNotes: 0,
  },
];

const meta = {
  title: 'Components/ClientTable',
  component: ClientTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClientTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    clients: mockClients,
    selectedClients: [],
    onSelectClient: (clientId: string) => {
      console.log('Selected client:', clientId);
    },
    onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Select all:', event.target.checked);
    },
  },
};

export const WithSelection: Story = {
  args: {
    clients: mockClients,
    selectedClients: ['1', '3'],
    onSelectClient: (clientId: string) => {
      console.log('Selected client:', clientId);
    },
    onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Select all:', event.target.checked);
    },
  },
};

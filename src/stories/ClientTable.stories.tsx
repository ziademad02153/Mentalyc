import type { Meta, StoryObj } from '@storybook/react';
import ClientTable from '../components/ClientTable/ClientTable';
import { Client } from '../types';

const mockClients: Client[] = [
  {
    id: '1',
    name: 'John Doe',
    clinicianName: 'Dr. Smith',
    clientType: 'Individual',
    lastSession: 'Oct 31, 2023',
    unsavedNotes: 3,
  },
  {
    id: '2',
    name: 'Jane & John Smith',
    clinicianName: 'Dr. Smith',
    clientType: 'Couple',
    lastSession: 'Oct 30, 2023',
    unsavedNotes: 1,
  },
  {
    id: '3',
    name: 'Smith Family',
    clinicianName: 'Dr. Johnson',
    clientType: 'Family',
    lastSession: 'Oct 29, 2023',
    unsavedNotes: 2,
  },
  {
    id: '4',
    name: 'Tommy Wilson',
    clinicianName: 'Dr. Brown',
    clientType: 'Child',
    lastSession: 'Oct 28, 2023',
    unsavedNotes: 5,
  },
  {
    id: '5',
    name: 'Support Group A',
    clinicianName: 'Dr. Wilson',
    clientType: 'Group',
    lastSession: 'Oct 27, 2023',
    unsavedNotes: 0,
  },
];

const meta = {
  title: 'Components/ClientTable',
  component: ClientTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClientTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    clients: mockClients,
    selectedClients: [],
    onSelectClient: () => {},
    onSelectAll: () => {},
  },
};

export const WithSelection: Story = {
  args: {
    clients: mockClients,
    selectedClients: ['1'],
    onSelectClient: () => {},
    onSelectAll: () => {},
  },
};

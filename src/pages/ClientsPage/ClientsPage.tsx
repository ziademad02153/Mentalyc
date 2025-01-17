import React, { useState } from 'react';
import { Box, Tab, Tabs, TextField, MenuItem, Button, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClientTable from '../../components/ClientTable/ClientTable';
import ClientForm from '../../components/ClientForm/ClientForm';
import { Client } from '../../types';

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: '24px',
  backgroundColor: '#F9F9F9',
  minHeight: 'calc(100vh - 64px)',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.04)',
}));

const TabsBox = styled(Box)(({ theme }) => ({
  borderBottom: '1px solid #E0E0E0',
  marginBottom: '24px',
}));

const FilterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  marginBottom: '24px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#8B1D94',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8B1D94',
    },
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  border: '1px solid #8B1D94',
  color: '#8B1D94',
  padding: '8px 16px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(139, 29, 148, 0.04)',
    borderColor: '#8B1D94',
  },
}));

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    clinicianName: 'Dr. Emily Parker',
    clientType: 'Individual',
    lastSession: 'Jan 15, 2025',
    unsavedNotes: 3,
  },
  {
    id: '2',
    name: 'Mike & Lisa Thompson',
    clinicianName: 'Dr. James Wilson',
    clientType: 'Couple',
    lastSession: 'Jan 14, 2025',
    unsavedNotes: 2,
  },
  {
    id: '3',
    name: 'Anderson Family',
    clinicianName: 'Dr. Sarah Chen',
    clientType: 'Family',
    lastSession: 'Jan 13, 2025',
    unsavedNotes: 5,
  },
  {
    id: '4',
    name: 'Tommy Wilson',
    clinicianName: 'Dr. Michael Brown',
    clientType: 'Child',
    lastSession: 'Jan 12, 2025',
    unsavedNotes: 1,
  },
  {
    id: '5',
    name: 'Anxiety Support Group',
    clinicianName: 'Dr. Rachel Green',
    clientType: 'Group',
    lastSession: 'Jan 11, 2025',
    unsavedNotes: 4,
  },
  {
    id: '6',
    name: 'David Miller',
    clinicianName: 'Dr. Emily Parker',
    clientType: 'Individual',
    lastSession: 'Jan 10, 2025',
    unsavedNotes: 2,
  },
  {
    id: '7',
    name: 'John & Mary Davis',
    clinicianName: 'Dr. James Wilson',
    clientType: 'Couple',
    lastSession: 'Jan 9, 2025',
    unsavedNotes: 3,
  },
];

const clinicians = [
  'Dr. Emily Parker',
  'Dr. James Wilson',
  'Dr. Sarah Chen',
  'Dr. Michael Brown',
  'Dr. Rachel Green',
];

const ClientsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedClientFilter, setSelectedClientFilter] = useState('');
  const [selectedClinicianFilter, setSelectedClinicianFilter] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleSelectClient = (clientId: string) => {
    setSelectedClients(prev =>
      prev.includes(clientId)
        ? prev.filter(id => id !== clientId)
        : [...prev, clientId]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedClients(checked ? mockClients.map(client => client.id) : []);
  };

  const handleAddClient = (data: any) => {
    console.log('New client data:', data);
    setIsFormOpen(false);
  };

  const filteredClients = mockClients.filter(client => {
    const matchesClient = selectedClientFilter ? 
      client.name.toLowerCase().includes(selectedClientFilter.toLowerCase()) : true;
    const matchesClinician = selectedClinicianFilter ? 
      client.clinicianName === selectedClinicianFilter : true;
    return matchesClient && matchesClinician;
  });

  return (
    <StyledContainer>
      <ContentBox>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <TabsBox>
            <Tabs 
              value={selectedTab} 
              onChange={handleTabChange}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#8B1D94',
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#666666',
                  '&.Mui-selected': {
                    color: '#8B1D94',
                  },
                },
              }}
            >
              <Tab label={`In treatment (${mockClients.length})`} />
              <Tab label="Deactivated (4)" />
            </Tabs>
          </TabsBox>
        </Box>

        <FilterBox>
          <StyledTextField
            select
            label="Client name"
            value={selectedClientFilter}
            onChange={(e) => setSelectedClientFilter(e.target.value)}
            sx={{ width: 240 }}
            size="small"
          >
            <MenuItem value="">All clients</MenuItem>
            {mockClients.map(client => (
              <MenuItem key={client.id} value={client.name}>
                {client.name}
              </MenuItem>
            ))}
          </StyledTextField>
          <StyledTextField
            select
            label="Clinician name"
            value={selectedClinicianFilter}
            onChange={(e) => setSelectedClinicianFilter(e.target.value)}
            sx={{ width: 240 }}
            size="small"
          >
            <MenuItem value="">All clinicians</MenuItem>
            {clinicians.map(clinician => (
              <MenuItem key={clinician} value={clinician}>
                {clinician}
              </MenuItem>
            ))}
          </StyledTextField>
          <Box sx={{ flexGrow: 1 }} />
          <AddButton
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setIsFormOpen(true)}
          >
            Add new client
          </AddButton>
        </FilterBox>

        <ClientTable
          clients={filteredClients}
          selectedClients={selectedClients}
          onSelectClient={handleSelectClient}
          onSelectAll={handleSelectAll}
        />

        <ClientForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddClient}
        />
      </ContentBox>
    </StyledContainer>
  );
};

export default ClientsPage;

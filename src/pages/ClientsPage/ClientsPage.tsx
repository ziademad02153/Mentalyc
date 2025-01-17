import React, { useState } from 'react';
import { Box, Tab, Tabs, TextField, MenuItem, Button, styled, Typography, Paper, FormControl, InputLabel, Select } from '@mui/material';
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
          <Typography 
            variant="h5" 
            sx={{ 
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            Clients
          </Typography>
        </Box>

        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 2, sm: 3 },
            mb: { xs: 2, sm: 3 },
            borderRadius: '12px',
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 3 },
            mb: { xs: 2, sm: 3 },
          }}>
            <FormControl 
              fullWidth 
              sx={{ 
                flex: { sm: 1 },
                minWidth: { sm: '200px' },
              }}
            >
              <InputLabel>Select client</InputLabel>
              <Select
                value={selectedClientFilter}
                label="Select client"
                onChange={(e) => setSelectedClientFilter(e.target.value)}
                sx={{ borderRadius: '8px' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {mockClients.map(client => (
                  <MenuItem key={client.id} value={client.name}>
                    {client.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl 
              fullWidth 
              sx={{ 
                flex: { sm: 1 },
                minWidth: { sm: '200px' },
              }}
            >
              <InputLabel>Select clinician</InputLabel>
              <Select
                value={selectedClinicianFilter}
                label="Select clinician"
                onChange={(e) => setSelectedClinicianFilter(e.target.value)}
                sx={{ borderRadius: '8px' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {clinicians.map(clinician => (
                  <MenuItem key={clinician} value={clinician}>
                    {clinician}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button 
              variant="outlined" 
              startIcon={<AddIcon />}
              onClick={() => setIsFormOpen(true)}
              sx={{ 
                minWidth: { xs: '100%', sm: 'auto' },
                height: '56px',
                borderRadius: '8px',
                borderColor: '#79747E',
                color: '#1C1B1F',
                '&:hover': {
                  borderColor: '#1C1B1F',
                  backgroundColor: 'rgba(28, 27, 31, 0.04)',
                },
              }}
            >
              Add new client
            </Button>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 },
          }}>
            <Box sx={{ 
              display: 'flex',
              gap: 2,
              width: { xs: '100%', sm: 'auto' },
            }}>
              <Button 
                variant={selectedTab === 0 ? 'contained' : 'text'}
                onClick={() => setSelectedTab(0)}
                sx={{ 
                  flex: { xs: 1, sm: 'none' },
                  minWidth: { sm: '120px' },
                  color: selectedTab === 0 ? 'white' : '#49454F',
                  backgroundColor: selectedTab === 0 ? '#8B1D94' : 'transparent',
                  '&:hover': {
                    backgroundColor: selectedTab === 0 ? '#7B1A84' : 'rgba(28, 27, 31, 0.04)',
                  },
                }}
              >
                In treatment ({mockClients.length})
              </Button>
              <Button 
                variant={selectedTab === 1 ? 'contained' : 'text'}
                onClick={() => setSelectedTab(1)}
                sx={{ 
                  flex: { xs: 1, sm: 'none' },
                  minWidth: { sm: '120px' },
                  color: selectedTab === 1 ? 'white' : '#49454F',
                  backgroundColor: selectedTab === 1 ? '#8B1D94' : 'transparent',
                  '&:hover': {
                    backgroundColor: selectedTab === 1 ? '#7B1A84' : 'rgba(28, 27, 31, 0.04)',
                  },
                }}
              >
                Deactivated (4)
              </Button>
            </Box>
          </Box>

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
        </Paper>
      </ContentBox>
    </StyledContainer>
  );
};

export default ClientsPage;

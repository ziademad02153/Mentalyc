import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Box,
  Chip,
} from '@mui/material';

interface Client {
  id: string;
  name: string;
  clinician: string;
  type: string;
  lastSession: string;
  unsavedNotes: number;
  isHighRisk?: boolean;
}

interface ClientTableProps {
  clients: Client[];
  selectedClients: string[];
  onSelectClient: (clientId: string) => void;
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'Individual':
      return '#E8E0FF';
    case 'Couple':
      return '#E0F7FF';
    case 'Family':
      return '#FFE0E0';
    case 'Child':
      return '#E0FFE9';
    case 'Group':
      return '#FFF6E0';
    default:
      return '#E8E0FF';
  }
};

function ClientTable({ clients, selectedClients, onSelectClient, onSelectAll }: ClientTableProps) {
  return (
    <TableContainer 
      component={Paper} 
      elevation={0}
      sx={{ 
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <Table 
        sx={{ 
          minWidth: { xs: '100%', sm: 650 },
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: '#F6F5F7',
              '& th': {
                color: '#49454F',
                fontWeight: 500,
                fontSize: '0.875rem',
                borderBottom: 'none',
                py: { xs: 1.5, sm: 2 },
                px: { xs: 1, sm: 2 },
                whiteSpace: 'nowrap',
              },
            }}
          >
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selectedClients.length > 0 && selectedClients.length < clients.length}
                checked={selectedClients.length === clients.length && clients.length > 0}
                onChange={onSelectAll}
                sx={{
                  color: '#79747E',
                  '&.Mui-checked': {
                    color: '#8B1D94',
                  },
                  '&.MuiCheckbox-indeterminate': {
                    color: '#8B1D94',
                  },
                }}
              />
            </TableCell>
            <TableCell>Client name</TableCell>
            <TableCell>Clinician name</TableCell>
            <TableCell>Client type</TableCell>
            <TableCell>Last session</TableCell>
            <TableCell align="center">Unsaved notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              hover
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '& td': {
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 1, sm: 2 },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  borderBottom: '1px solid #E0E0E0',
                },
                '&:hover': {
                  backgroundColor: '#F6F5F7',
                },
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedClients.includes(client.id)}
                  onChange={() => onSelectClient(client.id)}
                  sx={{
                    color: '#79747E',
                    '&.Mui-checked': {
                      color: '#8B1D94',
                    },
                  }}
                />
              </TableCell>
              <TableCell>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  {client.name}
                  {client.isHighRisk && (
                    <Chip
                      label="High Risk"
                      size="small"
                      sx={{
                        backgroundColor: '#FFE9E9',
                        color: '#B3261E',
                        fontSize: '0.75rem',
                        height: '24px',
                        display: { xs: 'none', sm: 'flex' },
                      }}
                    />
                  )}
                </Box>
              </TableCell>
              <TableCell>{client.clinician}</TableCell>
              <TableCell>
                <Chip
                  label={client.type}
                  size="small"
                  sx={{
                    backgroundColor: getTypeColor(client.type),
                    color: '#1C1B1F',
                    fontSize: '0.75rem',
                    height: '24px',
                  }}
                />
              </TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{client.lastSession}</TableCell>
              <TableCell align="center">{client.unsavedNotes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClientTable;

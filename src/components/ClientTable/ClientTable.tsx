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
  useTheme,
  useMediaQuery,
  Typography,
  Stack,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <Stack spacing={2}>
        {clients.map((client) => (
          <Paper
            key={client.id}
            elevation={0}
            sx={{
              p: 2,
              borderRadius: '12px',
              border: '1px solid #E0E0E0',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <Checkbox
                checked={selectedClients.includes(client.id)}
                onChange={() => onSelectClient(client.id)}
                sx={{
                  color: '#79747E',
                  mt: 0.5,
                  '&.Mui-checked': {
                    color: '#8B1D94',
                  },
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {client.name}
                  </Typography>
                  {client.isHighRisk && (
                    <Chip
                      label="High Risk"
                      size="small"
                      sx={{
                        backgroundColor: '#FFE9E9',
                        color: '#B3261E',
                        fontSize: '0.75rem',
                        height: '24px',
                      }}
                    />
                  )}
                </Box>
                <Stack spacing={1}>
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      Clinician
                    </Typography>
                    <Typography variant="body2">{client.clinician}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      Client type
                    </Typography>
                    <Box>
                      <Chip
                        label={client.type}
                        size="small"
                        sx={{
                          backgroundColor: getTypeColor(client.type),
                          color: '#1C1B1F',
                          fontSize: '0.75rem',
                          height: '24px',
                          mt: 0.5,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      Last session
                    </Typography>
                    <Typography variant="body2">{client.lastSession}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      Unsaved notes
                    </Typography>
                    <Typography variant="body2">{client.unsavedNotes}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Paper>
        ))}
      </Stack>
    );
  }

  return (
    <TableContainer 
      component={Paper} 
      elevation={0}
      sx={{ 
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: '#F6F5F7',
              '& th': {
                color: '#49454F',
                fontWeight: 500,
                fontSize: '0.875rem',
                borderBottom: 'none',
                py: 2,
                px: 2,
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
                  py: 2,
                  px: 2,
                  fontSize: '0.875rem',
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
              <TableCell>{client.lastSession}</TableCell>
              <TableCell align="center">{client.unsavedNotes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClientTable;

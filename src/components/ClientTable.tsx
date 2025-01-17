import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

interface Client {
  id: string;
  name: string;
  clinicianName: string;
  clientType: string;
  lastSession: string;
  unsavedNotes: number;
}

interface ClientTableProps {
  clients: Client[];
  selectedClients: string[];
  onSelectClient: (clientId: string) => void;
  onSelectAll: (checked: boolean) => void;
}

export const ClientTable: React.FC<ClientTableProps> = ({
  clients,
  selectedClients,
  onSelectClient,
  onSelectAll,
}) => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell padding="checkbox">
              <Checkbox
                indeterminate={selectedClients.length > 0 && selectedClients.length < clients.length}
                checked={selectedClients.length === clients.length}
                onChange={(e) => onSelectAll(e.target.checked)}
              />
            </StyledTableCell>
            <StyledTableCell>Client name</StyledTableCell>
            <StyledTableCell>Clinician name</StyledTableCell>
            <StyledTableCell>Client type</StyledTableCell>
            <StyledTableCell>Last session</StyledTableCell>
            <StyledTableCell>Unsaved notes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              hover
              selected={selectedClients.includes(client.id)}
            >
              <StyledTableCell padding="checkbox">
                <Checkbox
                  checked={selectedClients.includes(client.id)}
                  onChange={() => onSelectClient(client.id)}
                />
              </StyledTableCell>
              <StyledTableCell>{client.name}</StyledTableCell>
              <StyledTableCell>{client.clinicianName}</StyledTableCell>
              <StyledTableCell>
                <Box
                  sx={{
                    display: 'inline-block',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: (theme) => {
                      switch (client.clientType.toLowerCase()) {
                        case 'individual':
                          return '#F0E6FF';
                        case 'couple':
                          return '#E6F4FF';
                        case 'family':
                          return '#FFF3E6';
                        case 'child':
                          return '#E6FFE6';
                        case 'group':
                          return '#FFFDE6';
                        default:
                          return theme.palette.grey[200];
                      }
                    },
                  }}
                >
                  <Typography variant="body2">{client.clientType}</Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell>{client.lastSession}</StyledTableCell>
              <StyledTableCell>{client.unsavedNotes}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

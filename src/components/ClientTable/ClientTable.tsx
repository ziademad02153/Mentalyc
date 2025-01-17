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
  styled,
} from '@mui/material';
import { Client } from '../../types';

interface ClientTableProps {
  clients: Client[];
  selectedClients: string[];
  onSelectClient: (clientId: string) => void;
  onSelectAll: (checked: boolean) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 'none',
  padding: '12px 16px',
  fontSize: '0.875rem',
  color: '#1A1A1A',
  backgroundColor: '#FFFFFF',
  '&.MuiTableCell-head': {
    backgroundColor: '#FAFAFA',
    color: '#666666',
    fontWeight: 500,
    borderTop: 'none',
    borderBottom: '1px solid #E0E0E0',
    padding: '16px',
  },
  '&.checkbox-cell': {
    width: '48px',
    padding: '12px 8px 12px 16px',
  },
  '&.client-type-cell': {
    minWidth: '100px',
  },
  '&.unsaved-notes-cell': {
    width: '120px',
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  '& td': {
    backgroundColor: '#FFFFFF',
    '&:first-of-type': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    '&:last-of-type': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  },
  '&:hover': {
    '& td': {
      backgroundColor: '#FAFAFA',
    },
  },
  '&.Mui-selected': {
    '& td': {
      backgroundColor: 'rgba(139, 29, 148, 0.04) !important',
    },
  },
  '&.Mui-selected:hover': {
    '& td': {
      backgroundColor: 'rgba(139, 29, 148, 0.08) !important',
    },
  },
});

const StyledTableContainer = styled(TableContainer)({
  borderRadius: '12px',
  border: '1px solid #E0E0E0',
  '& .MuiTable-root': {
    borderCollapse: 'separate',
    borderSpacing: '0 8px',
  },
});

const StyledCheckbox = styled(Checkbox)({
  color: '#CCCCCC',
  padding: 0,
  '&.Mui-checked': {
    color: '#8B1D94',
  },
  '&.MuiCheckbox-indeterminate': {
    color: '#8B1D94',
  },
});

const ClientTypeChip = styled(Box)<{ clientType: string }>(({ clientType }) => {
  const colors: { [key: string]: { bg: string; color: string } } = {
    Individual: { bg: '#E8E0FF', color: '#6B4DE6' },
    Couple: { bg: '#E0F7FF', color: '#4DB5E6' },
    Family: { bg: '#FFE0E0', color: '#E64D4D' },
    Child: { bg: '#E0FFE9', color: '#4DE668' },
    Group: { bg: '#FFF6E0', color: '#E6B44D' },
  };

  const style = colors[clientType] || colors.Individual;

  return {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 500,
    backgroundColor: style.bg,
    color: style.color,
    height: '24px',
  };
});

const ClientTable: React.FC<ClientTableProps> = ({
  clients,
  selectedClients,
  onSelectClient,
  onSelectAll,
}) => {
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectAll(event.target.checked);
  };

  return (
    <StyledTableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell padding="checkbox" className="checkbox-cell">
              <StyledCheckbox
                indeterminate={selectedClients.length > 0 && selectedClients.length < clients.length}
                checked={clients.length > 0 && selectedClients.length === clients.length}
                onChange={handleSelectAll}
              />
            </StyledTableCell>
            <StyledTableCell>Client name</StyledTableCell>
            <StyledTableCell>Clinician name</StyledTableCell>
            <StyledTableCell className="client-type-cell">Client type</StyledTableCell>
            <StyledTableCell>Last session</StyledTableCell>
            <StyledTableCell className="unsaved-notes-cell">Unsaved notes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <StyledTableRow
              key={client.id}
              selected={selectedClients.includes(client.id)}
            >
              <StyledTableCell padding="checkbox" className="checkbox-cell">
                <StyledCheckbox
                  checked={selectedClients.includes(client.id)}
                  onChange={() => onSelectClient(client.id)}
                />
              </StyledTableCell>
              <StyledTableCell>{client.name}</StyledTableCell>
              <StyledTableCell>{client.clinicianName}</StyledTableCell>
              <StyledTableCell className="client-type-cell">
                <ClientTypeChip clientType={client.clientType}>
                  {client.clientType}
                </ClientTypeChip>
              </StyledTableCell>
              <StyledTableCell>{client.lastSession}</StyledTableCell>
              <StyledTableCell className="unsaved-notes-cell">{client.unsavedNotes}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ClientTable;

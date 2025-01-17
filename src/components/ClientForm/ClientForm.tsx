import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Button,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ClientFormData } from '../../types';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    padding: theme.spacing(2),
    maxWidth: 500,
    width: '100%',
  },
}));

interface ClientFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (client: ClientFormData) => void;
}

const diagnoses = [
  { code: 'F43.22', name: 'Adjustment disorder with anxiety' },
  { code: 'F42.54', name: 'Anxiety' },
  { code: 'F21.276', name: 'Disorder' },
];

const ClientForm: React.FC<ClientFormProps> = ({ open, onClose, onSubmit }) => {
  const [clientType, setClientType] = useState<'Individual' | 'Couple'>('Individual');
  const [formData, setFormData] = useState<ClientFormData>({
    clientType: 'Individual',
    name1: '',
    name2: '',
    pronouns: 'He/Him',
    yearOfBirth: '',
    diagnosis: 'F43.22 - Adjustment disorder with anxiety',
    isHighRisk: false,
    extraNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h5" component="div">
          Add new client
        </Typography>
        <Typography variant="body2" color="textSecondary">
          This client information is essential for generating detailed clients documents
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <Typography variant="subtitle1" component="div" mb={1}>
              Client type *
            </Typography>
            <RadioGroup
              row
              value={clientType}
              onChange={(e) => {
                const type = e.target.value as 'Individual' | 'Couple';
                setClientType(type);
                setFormData({ ...formData, clientType: type });
              }}
            >
              <FormControlLabel
                value="Individual"
                control={<Radio />}
                label="Individual"
              />
              <FormControlLabel
                value="Couple"
                control={<Radio />}
                label="Couple"
              />
            </RadioGroup>
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              label={clientType === 'Individual' ? 'Name *' : 'Name 1 *'}
              value={formData.name1}
              onChange={(e) => setFormData({ ...formData, name1: e.target.value })}
            />
          </Box>

          {clientType === 'Couple' && (
            <Box mb={2}>
              <TextField
                fullWidth
                label="Name 2 *"
                value={formData.name2}
                onChange={(e) => setFormData({ ...formData, name2: e.target.value })}
              />
            </Box>
          )}

          {clientType === 'Individual' && (
            <Box mb={2}>
              <Typography variant="subtitle1" component="div" mb={1}>
                Pronouns *
              </Typography>
              <RadioGroup
                row
                value={formData.pronouns}
                onChange={(e) => setFormData({ ...formData, pronouns: e.target.value as 'He/Him' | 'She/Her' | 'They/Them' })}
              >
                <FormControlLabel
                  value="He/Him"
                  control={<Radio />}
                  label="He/Him"
                />
                <FormControlLabel
                  value="She/Her"
                  control={<Radio />}
                  label="She/Her"
                />
                <FormControlLabel
                  value="They/Them"
                  control={<Radio />}
                  label="They/Them"
                />
              </RadioGroup>
            </Box>
          )}

          {clientType === 'Individual' && (
            <Box mb={2}>
              <TextField
                fullWidth
                label="Year of birth"
                value={formData.yearOfBirth}
                onChange={(e) => setFormData({ ...formData, yearOfBirth: e.target.value })}
              />
            </Box>
          )}

          <Box mb={2}>
            <FormControl fullWidth>
              <Typography variant="subtitle1" component="div" mb={1}>
                Diagnosis
              </Typography>
              <Select
                value={formData.diagnosis}
                onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
              >
                {diagnoses.map((diagnosis) => (
                  <MenuItem key={diagnosis.code} value={`${diagnosis.code} - ${diagnosis.name}`}>
                    {diagnosis.code} - {diagnosis.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1">High risk client</Typography>
            <Switch
              checked={formData.isHighRisk}
              onChange={(e) => setFormData({ ...formData, isHighRisk: e.target.checked })}
            />
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Extra notes"
              placeholder="Extra information about your client"
              value={formData.extraNotes}
              onChange={(e) => setFormData({ ...formData, extraNotes: e.target.value })}
            />
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              type="submit"
              sx={{ bgcolor: '#8B1D94' }}
            >
              Add client
            </Button>
          </Box>
        </form>
      </DialogContent>
    </StyledDialog>
  );
};

export default ClientForm;

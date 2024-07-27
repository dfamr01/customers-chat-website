import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
  SelectChangeEvent,
} from "@mui/material";

interface LoginFormProps {
  formData: FormData;
  addresses: string[];
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | SelectChangeEvent
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  addresses,
  handleInputChange,
  handleSubmit,
  isFormValid,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, margin: "auto", mt: 4 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
        inputProps={{ pattern: "[A-Za-z]+" }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
        inputProps={{ pattern: "[A-Za-z]+" }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="address-label">Address</InputLabel>
        <Select
          labelId="address-label"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        >
          <MenuItem value="">
            <em>Select an address</em>
          </MenuItem>
          {addresses.map((address, index) => (
            <MenuItem key={index} value={address}>
              {address}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={!isFormValid}
        sx={{ mt: 2 }}
      >
        Start Chat
      </Button>
    </Box>
  );
};

export default LoginForm;

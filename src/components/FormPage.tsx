import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

interface FormDataProps {
  setNotify: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormData: React.FC<FormDataProps> = ({ setNotify }) => {
  const navigate = useNavigate();

  const [fieldValues, setFieldValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  console.log(fieldValues);

  const handleClick = () => {
    if (!(fieldValues.name.length > 1 && fieldValues.email.length > 1 && fieldValues.phone.length > 1)) {
      window.alert("Fill the form before submitting");
      return;
    }

    localStorage.setItem('formData', JSON.stringify(fieldValues));
    setNotify(false);
    navigate("/dataList");
  }

  const handleFieldChanges = (fieldId: string, value: string) => {
    setFieldValues((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  }

  return (
    <Box className="container">
      <TextField
        required
        id="outlined-basic-1"
        label="Name"
        variant="outlined"
        className="textfield"
        value={fieldValues.name}
        onChange={(e) => handleFieldChanges('name', e.target.value)}
      />
      <TextField
        required
        id="outlined-basic-2"
        label="Email"
        variant="outlined"
        className="textfield"
        value={fieldValues.email}
        onChange={(e) => handleFieldChanges('email', e.target.value)}
      />
      <TextField
        required
        id="outlined-basic-3"
        label="Phone"
        variant="outlined"
        className="textfield"
        value={fieldValues.phone}
        onChange={(e) => handleFieldChanges('phone', e.target.value)}
      />
      <Button variant="contained" className="button" onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );
}

export default FormData;

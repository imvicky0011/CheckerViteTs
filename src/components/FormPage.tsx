import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormData({setNotify}) {
  const navigate = useNavigate()
  const [fieldValues, setFieldValues] = useState({
    name: '',
    email: '',
    phone: '',
  })

  console.log(fieldValues)

  const handleClick = () => {
    //validating if the user has filled the form entirely
    //we could validate extensively, but for now
    //i am using this naive validation to make sure 
    //user fills the form with all the field
    if(!(fieldValues.name.length > 1 && fieldValues.email.length > 1 && fieldValues.phone.length > 1)) {
      window.alert("Fill the form before submitting")
      return
    }

    //if the values are validated, then store them in the local Storage
    localStorage.setItem('formData', JSON.stringify(fieldValues));
    setNotify(false)
    navigate("/dataList")
  }


  //inferring the tyeps of the data, to avoid the 'any' reference
  const handleFieldChanges = (fieldId: string, value: string) => {
    console.log("coming")
    setFieldValues((prev) => ({
      ...prev,
      [fieldId]: value,
    }))
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

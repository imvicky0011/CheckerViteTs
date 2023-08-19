import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Select, MenuItem, Grid, Box, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Icon from '@mui/material/Icon';
import { blue } from '@mui/material/colors';
import './FilterNav.css'


const FilterNav = ({departmentData}) => {
  const [expand, setExanpd] = useState(false)
  console.log(departmentData)
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);
  const [selectAllSubDepartments, setSelectAllSubDepartments] = useState<boolean>(false);

  const handleSubDepartmentChange = (subDepartmentName: string) => {
    if (selectedSubDepartments.includes(subDepartmentName)) {
      setSelectedSubDepartments(selectedSubDepartments.filter((name) => name !== subDepartmentName));
    } else {
      setSelectedSubDepartments([...selectedSubDepartments, subDepartmentName]);
    }
  };

  const handleSelectAllSubDepartments = () => {
    if (selectAllSubDepartments) {
      setSelectedSubDepartments([]);
    } else {
      const allSubDepartments = departmentsData.reduce<string[]>((acc, department) => {
        return [...acc, ...department.subDepartments.map((subDepartment) => subDepartment.name)];
      }, []);
      setSelectedSubDepartments(allSubDepartments);
    }
    setSelectAllSubDepartments(!selectAllSubDepartments);
  };

  const handleExpand = () => {
    setExanpd(!expand)
  }

  return (
    <Grid container spacing={2}>
      <Grid item key={departmentsData.id}>
          <Box display="flex" alignItems="center" flexDirection="column" borderTop="2px solid black" borderBottom="2px solid black">
            
            <div className='headingDep'>
                <FormControlLabel
                    label={departmentsData[0].name}
                    control={
                        <Checkbox
                        checked={selectAllSubDepartments}
                        onChange={handleSelectAllSubDepartments}
                        />
                    }
                />
            <Button onClick={handleExpand}> 
                {expand && <ExpandMoreIcon fontSize="large" sx={{ color: blue[500] }}/>}
                {!expand && <ExpandLessIcon fontSize="large" sx={{ color: blue[500] }}/>}
            </Button>
            </div>
              
            {
            expand &&
            <Box display="flex" flexDirection="column" alignItems="flex-start" border="2px solid black" width="16rem">
            {departmentsData[0].subDepartments.map((subDepartment) => (
              <Box key={subDepartment.id} ml={2}>
                <FormControlLabel
                  label={subDepartment.name}
                  control={
                    <Checkbox
                      checked={selectedSubDepartments.includes(subDepartment.name)}
                      onChange={() => handleSubDepartmentChange(subDepartment.name)}
                    />
                  }
                />
              </Box>
            ))}
          </Box>
          }

          </Box>
        </Grid>


        
    </Grid>
  );
};

export default FilterNav;

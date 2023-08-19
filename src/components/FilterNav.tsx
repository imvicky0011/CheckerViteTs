import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Select, MenuItem, Grid, Box, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { blue } from '@mui/material/colors';

import './FilterNav.css'
interface SubDepartment {
  id: number;
  name: string;
}

interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

const departmentsData: Department[] = [
  {
    id: 1,
    name: 'Fishing & Agriculture',
    subDepartments: [
      { id: 11, name: 'Agriculture' },
      { id: 12, name: 'Crops' },
      { id: 13, name: 'Ranching' },
    ],
  },
  {
    id: 2,
    name: 'Business Services',
    subDepartments: [
      { id: 21, name: 'Accounting & Services' },
      { id: 22, name: 'Auctions' },
      { id: 23, name: 'Career Planning' },
    ],
  },
];

const FilterNav = () => {
  const [expand, setExanpd] = useState(false)
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);
  const [selectAllSubDepartments, setSelectAllSubDepartments] = useState<boolean>(false);

  const [expand2, setExpand2] = useState(false)
  console.log(departmentsData[0])
  const [selectedSubDepartments2, setSelectedSubDepartments2] = useState<string[]>([]);
  const [selectAllSubDepartments2, setSelectAllSubDepartments2] = useState<boolean>(false);


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



  const handleSubDepartmentChange2 = (subDepartmentName: string) => {
    if (selectedSubDepartments2.includes(subDepartmentName)) {
      setSelectedSubDepartments2(selectedSubDepartments2.filter((name) => name !== subDepartmentName));
    } else {
      setSelectedSubDepartments2([...selectedSubDepartments2, subDepartmentName]);
    }
  };

  const handleSelectAllSubDepartments2 = () => {
    if (selectAllSubDepartments2) {
      setSelectedSubDepartments2([]);
    } else {
      const allSubDepartments = departmentsData.reduce<string[]>((acc, department) => {
        return [...acc, ...department.subDepartments.map((subDepartment) => subDepartment.name)];
      }, []);
      setSelectedSubDepartments2(allSubDepartments);
    }
    setSelectAllSubDepartments2(!selectAllSubDepartments2);
  };

  const handleExpand2 = () => {
    setExpand2(!expand2)
  }

  return (
    <Grid container spacing={10}>
      <Grid item key={departmentsData[0].id}>
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


        <Grid item key={departmentsData[1].id}>
          <Box display="flex" alignItems="center" flexDirection="column" borderTop="2px solid black" borderBottom="2px solid black">
            
            <div className='headingDep'>
                <FormControlLabel
                    label={departmentsData[1].name}
                    control={
                        <Checkbox
                        checked={selectAllSubDepartments2}
                        onChange={handleSelectAllSubDepartments2}
                        />
                    }
                />
            <Button onClick={handleExpand2}> 
                {expand2 && <ExpandMoreIcon fontSize="large" sx={{ color: blue[500] }}/>}
                {!expand2 && <ExpandLessIcon fontSize="large" sx={{ color: blue[500] }}/>}
            </Button>
            </div>
              
            {
            expand2 &&
            <Box display="flex" flexDirection="column" alignItems="flex-start" border="2px solid black" width="16rem">
            {departmentsData[1].subDepartments.map((subDepartment) => (
              <Box key={subDepartment.id} ml={2}>
                <FormControlLabel
                  label={subDepartment.name}
                  control={
                    <Checkbox
                      checked={selectedSubDepartments2.includes(subDepartment.name)}
                      onChange={() => handleSubDepartmentChange2(subDepartment.name)}
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

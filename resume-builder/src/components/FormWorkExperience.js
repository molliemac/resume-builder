import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Input = styled('input')({
    display: 'none',
  });


export default function FormWorkExperience(props) {

    const [workInputFields, setWorkInputFields] = useState([
        {
            company: '',
            startDate: '',
            endDate: '',
            jobTitle: '',
            description: ''
        },
    ]);

    console.log(workInputFields);

    const handleChangeInput = (index, event) => {
        const values = [...workInputFields];
        values[index][event.target.name] = event.target.value;
        setWorkInputFields(values);
    }

    const handleAddFields = () => {
        setWorkInputFields([...workInputFields, { 
            company: '',
            startDate: '',
            endDate: '',
            jobTitle: '',
            description: ''
        }])
    }

    const handleRemoveFields = (index) => {
        const values = [...workInputFields];
        values.splice(index, 1);
        setWorkInputFields(values);
    }

  return (
      <>
      <AppBar position="static">
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Step 2: Work Information
          </Typography>
      </AppBar>
   
      <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          { workInputFields.map((workInputField, index) => (
              <div key={index}>
                  <div>
                    <TextField
                        id="outlined-basic"
                        label="Company"
                        name="Company"
                        variant="outlined"
                        value={workInputField.company}
                        onChange={event => handleChangeInput(index, event)}
                        />
                        <TextField
                        id="outlined-basic"
                        label="Job Title"
                        name="Job Title"
                        variant="outlined"
                        value={workInputField.jobTitle}
                        onChange={event => handleChangeInput(index, event)}
                        />
                  </div>
                  
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Start Date"
                            name="Start Date"
                            variant="outlined"
                            value={workInputField.startDate}
                            onChange={event => handleChangeInput(index, event)}
                            />
                            <TextField
                            id="outlined-basic"
                            label="End Date"
                            name="End Date"
                            variant="outlined"
                            value={workInputField.endDate}
                            onChange={event => handleChangeInput(index, event)}
                            />
                    </div>
                    <div>
                    <TextareaAutosize
                        style={{ width: 500 }}
                        minRows={4}
                        placeholder="Description"
                        name="Description"
                        value={workInputField.description}
                        onChange={event => handleChangeInput(index, event)}
                    />
                    </div>
                    
                    <IconButton
                        onClick={() => handleRemoveFields(index)}
                    >
                <RemoveIcon />
            </IconButton>
            <IconButton
                onClick={() => handleAddFields()}
            >
                <AddIcon />
            </IconButton>
                  </div>
          ))}
          
            
            
            
            <Button 
                variant="contained"
                onClick={props.nextStep}
                style={styles.button}
            >Continue
            </Button>
            
            </Box>
      </>
  );
}

const styles = {
    button: {
        margin: 15
    }
}


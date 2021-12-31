import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Input = styled('input')({
    display: 'none',
  });


export default function FormMyDetails(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [bioImg, setBioImg] = useState('');
    const [website, setWebsite] = useState('');
    const [bio, setBio] = useState('');
   

  return (
      <>
      
      <AppBar position="static">
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Step 1: Basic Information
          </Typography>
      </AppBar>
   
      <Box
          component="form"
          sx={{
              '& > :not(style)': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
      >
          <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br/>
            <TextField
              id="outlined-basic" 
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br/>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <br/>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br/>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <TextField
              id="outlined-basic"
              label="Website"
              variant="outlined"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <br/>
            <TextareaAutosize
              minRows={4}
              placeholder="Brief overview of your career"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <br/>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file"  onChange={(e) => setBioImg(e.target.value)} />
                <Button variant="contained" component="span">
                    Upload Bio Image
                </Button>
                <Avatar
                src={bioImg}
                style={{
                margin: "10px",
                width: "100px",
                height: "100px"
                }}
            />
            </label>
            <br/>
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


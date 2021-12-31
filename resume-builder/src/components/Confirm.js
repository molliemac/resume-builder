import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Data " />
                    <Container maxWidth="sm">
                    <List>
                    <ListItem>
                        <ListItemText
                            primary="First Name"
                            secondary={ values.firstName }
                        />
                        <ListItemIcon>
                            <EditIcon onClick={handleChange ('firsName')} />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Last Name"
                            secondary={ values.lastName }
                        />
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Email"
                            secondary={ values.email }
                        />
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Title"
                            secondary={ values.title }
                        />
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="City"
                            secondary={ values.city }
                        />
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Bio"
                            secondary={ values.bio }
                        />
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                    <ListItemText
                        primary="Bio Image"
                    />
                    <ListItemAvatar>
                        <Avatar
                        alt={`Bio`}
                        src={ values.bioImage }
                        />
                    </ListItemAvatar>
                        <ListItemIcon>
                            <EditIcon onClick={this.handleChange} />
                        </ListItemIcon>
                    </ListItem>
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirm & Generate Preview"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    </Container>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }

}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;
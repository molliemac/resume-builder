import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';

const Editable = ({ 
    text,
    type,
    placeholder,
    children,
    childRef,
    ...props
}) => {

    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
            childRef.current.focus();
        }
    }, [isEditing, childRef]);

    const handleKeyDown = (event, type) => {
        const { key } = event;
        const keys = ["Escape", "Tab"];
        const enterKey = "Enter";
        const allKeys = [...keys, enterKey];

        if (
            (type === "textarea" && keys.indexOf(key) > -1) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
          ) {
            setEditing(false);
          }
    };

    return (
        <Container maxWidth="sm" {...props}>
       
            {isEditing ? (
                <ListItem>
                    <ListItemText
                        onBlur={() => setEditing(false)}
                        onKeyDown={e => handleKeyDown(e, type)}
                    />
                    {children}
                </ListItem>

                
                    
            ): (
                <List>
                    <ListItem>
                    <ListItemText
                        primary={text || placeholder || "Editable"}
                    />
                    <ListItemIcon>
                            <EditIcon onClick={() => setEditing(true)} />
                        </ListItemIcon>
                    </ListItem>
                </List>
                
            )}
        </Container>
    );
};

export default Editable;
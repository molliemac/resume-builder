import React, { useRef, useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Editable from './Editable';

function InputData() {
    const inputRef = useRef();
    const textareaRef = useRef();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");

    return (
        <MuiThemeProvider>
        <>
        <AppBar title="Resume Info" />
        <form>
            <Editable
                text={firstName}
                placeholder="First Name"
                childRef={inputRef}
                type="input"
            >
                <input
                    ref={inputRef}
                    type="text"
                    name="data"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} />
            </Editable>
            <Editable
                text={bio}
                placeholder="Bio"
                childRef={textareaRef}
                type="textarea"
            >
                <textarea
                    ref={textareaRef}
                    name="bio"
                    placeholder="Brief summary"
                    rows="5"
                    value={bio}
                    onChange={e => setBio(e.target.value)} />
            </Editable>
        </form>
        </>
        </MuiThemeProvider>
    );
}

export default InputData;
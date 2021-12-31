import React, { Component } from 'react';
import FormMyDetails from './FormMyDetails';
import FormWorkExperience from './FormWorkExperience';
import { Confirm } from './Confirm';
import { Resume } from './Resume';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        title: '',
        city: '',
        bio: '',
        bioImage: '',
    }

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle field changes
    handleChange = input => e => {
        if (e.target.type === 'file') {
            this.setState({[input]: URL.createObjectURL(e.target.files[0])});
        } else {
            this.setState({[input]: e.target.value});
        }
        
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, title, city, bio, bioImage } = this.state;
        const values = { firstName, lastName, email, title, city, bio, bioImage }; 
        
        switch(step) {
            case 1:
                return (
                    <FormMyDetails
                        nextStep={this.nextStep}
                        
                    />
                );
            case 2:
                return (
                    <FormWorkExperience
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                );
            case 3: 
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Resume
                        values={values} 
                    />
                )
        }
    }
}

export default UserForm;
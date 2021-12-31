import React, { Component } from 'react';
import UserForm from './UserForm';

export class Resume extends Component {
    render() {
        const { values: {firstName, lastName, email, title, city, bio} } = this.props;
        console.log(this.props);

        return (
            <div className="col-lg-8 mx-auto p-3 py-md-5">
                <header className="resume-header pt-4 pt-md-0">
			    <div className="row">
				    <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
				        <img className="picture" src="assets/images/profile.jpg" alt="" />
				    </div>
				    <div className="col">
					    <div className="row p-4 justify-content-center justify-content-md-between">
						    <div className="primary-info col-auto">
							    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Steve Doe</h1>
							    <div className="title mb-3">Full Stack Developer</div>
							    <ul className="list-unstyled">
								    <li className="mb-2"><a className="text-link" href="#"><i className="far fa-envelope fa-fw me-2" data-fa-transform="grow-3"></i>Steve.Doe@website.com</a></li>
								    <li><a className="text-link" href="#"><i className="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"></i>0123 456 78900</a></li>
							    </ul>
						    </div>
						    <div className="secondary-info col-auto mt-2">
							    <ul className="resume-social list-unstyled">
					                <li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/stevedoe</a></li>
					                <li className="mb-3"><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fab fa-github-alt fa-fw"></i></span>github.com/username</a></li>
					                
					                <li><a className="text-link" href="#"><span className="fa-container text-center me-2"><i className="fas fa-globe"></i></span>yourwebsite.com</a></li>
							    </ul>
						    </div>
					    </div>
					    
				    </div>
			    </div>
		    </header>
            </div>
        )

    }
}

export default Resume;


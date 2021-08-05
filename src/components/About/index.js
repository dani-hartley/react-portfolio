import React from 'react';
import profilePic from "../../assets/profile-pic.jpg";
import myResume from "../../assets/dani-resume-updated.docx";

function About() {
    return (
        <section id="about">
            <div classname="row">
                <div className="three columns">
                    <img className="profilepic" src={profilePic} alt="Dani Hartley Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                        condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                        mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
                        Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                        justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                        dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
                        Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Dani Hartley</span><br />
                                <span>Austin, TX </span><br />
                                <span>(801) 349-8311</span><br />
                                <span>dani_hartley@msn.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={myResume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
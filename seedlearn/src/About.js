import React from "react";
import './About.css';
import team  from "./project/img/team.gif"
import code  from "./project/img/Code.gif"
import going  from "./project/img/going.gif"
const About = () => {
    return(
        <div className="about-container">
        <div className="row">
            <div className="image-container">
            <img src={team} alt="team" />
            </div>
            <div className="content-container">
                <h1 className="content-head">About</h1>
                <p className="para">Welcome to Seed Learn, your go-to destination for education and startup innovation
                    We are a passionate team of educators, entrepreneurs and tech enthusiasts who believe 
                    in the power of knowledge and collaboration to shape a better future. Our platform is designed
                     to faster learning creativity, and the exchange of ideas to empower individuals and nurture the next generation of changemakers.
                     </p>
            </div>
        </div>
        <div className="row">
            <div className="content-container">
                <h1 className="content-head">Our Vision</h1>
                <p className="para">We envision a world where education goes beyond the confines of traditional classrooms, where ideas are nurtured, and where every individual is equipped with the skills and knowledge to bring their dreams to life. Our vision is to be a global leader in providing a collaborative and inclusive platform that enables learners and entrepreneurs to thrive, connect, and contribute to solving real-world challenges.</p>
            </div>
            <div className="image-container">
            <img src={code} alt="code" />
            </div>
        </div>
        <div className="row">
            <div className="image-container">
            <img src={going} alt="going" />
            </div>
            <div className="content-container">
                <h1 className="content-head3">Join the Seed Learn Community</h1>
                <p className="para">Whether you're a student, educator, or aspiring entrepreneur, we invite you to become a part of the Seed Learn community. Together, we can unlock the full potential of education and entrepreneurial spirit, driving positive change and creating a better future for everyone.

                At Seed Learn, we firmly believe that every idea, no matter how small, has the potential to grow into something remarkable. So, let's sow the seeds of knowledge, nurture innovation, and embark on a transformative journey together.</p>
            </div>
        </div>
    </div>
    );
  };
export default About;

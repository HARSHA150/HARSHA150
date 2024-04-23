import React from 'react';
import "../../styles/footer.css"; 
import logo from "../../assets/img/images.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  
  return (
    <footer className="footer">
      <div className="container"> 
        <div className="footer_wrapper" id="Footer">
          <div className="footer_box">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="FitBody Logo" />
              </div>
              <h2>FitBody</h2>
            </div>
            <p className="footer_text"> {/* Adding a specific class for paragraph styling */}
              "Welcome to FitBody - Your rhythm, your fitness journey! Join our vibrant community for energizing workouts, personalized training, and expert guidance. Let's groove to a healthier, happier you. Get started now!"
            </p>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <p>Our Program</p>
            <p>
              Our Plan
              <br />
              Become a Member
            </p>
          </div>

          <div className="footer_box"> 
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <a
                  href="https://www.instagram.com/gymvideosofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/gymmotivation?lang=en" 
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  Support Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          © Copyright - {currentYear} developed by Raja Harsha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

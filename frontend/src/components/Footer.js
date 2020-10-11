import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
    {/* // <!-- ======= Footer ======= --> */}
    <footer id='footer'>
  
      <div className="Footer-top">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-3 col-md-6 Footer-contact">
              <h3>Company</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>
  
            <div className="col-lg-2 col-md-6 Footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 Footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-6 Footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>We are hiring Aari Designers. If you want to work with us please contact us and send your CV through Our Email</p>
              
            </div>
  
          </div>
        </div> 
      </div>
  
      <div className="container d-md-flex py-4">
  
        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright <strong><span>YUTHIES DESIGNERS</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the Footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing inFormation: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact Form: https://bootstrapmade.com/company-free-html-bootstrap-template/ --> */}
            Designed by <a href="https://www.facebook.com/YuthiesDeisigners/">Yuthies Designers</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
      </footer>
      </div>
     

    
  );
}

export default Footer;

import React  from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
    {/* // <!-- ======= Footer ======= --> */}
    <footer id='footer'>
  
      <div className="Footer-top">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-3 col-md-6 Footer-contact">
              <h3>YUTHIES AARI</h3>
              <p>
                No27/4, Deforce Avenue, <br />
                Haiku Road,
                Bambalapitti <br /><br />
                <strong>Phone:</strong> +94 767703654<br />
                <strong>Email:</strong> yuthiesdesigners10@gmail.com<br />
              </p>
            </div>
  
            <div className="col-lg-2 col-md-6 Footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link ></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms</Link ></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Policy</Link ></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 Footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Aari Embroidary</Link ></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Unique Designs</Link ></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Product Management</Link ></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Door step collection</Link ></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">cash on doorstep payment</Link ></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-6 Footer-newsletter">
              <h4>Join Our Designers Team</h4>
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
            <!-- Purchase the pro version with working PHP/Link JAX contact Form: https://bootstrapmade.com/company-free-html-bootstrap-template/ --> */}
            Designed by <Link to="https://www.facebook.com/YuthiesDeisigners/">Yuthies Designers</Link >
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link >
          <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link >
          <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link >
          <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link >
        </div>
      </div>
      </footer>
      </div>
     

    
  );
}

export default Footer;

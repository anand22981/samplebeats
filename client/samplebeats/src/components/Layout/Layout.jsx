import Navbar from "../Navbar/Navbar";
import Homepage from "../../pages/homepage";
import "./Layout.css";
import './footer.css'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>

      <footer className="footer-container" style={{backgroundColor:"black"}}>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Samples</li>
            <li>Plugins</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Community</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Licensing</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SampleBeats.in — All rights reserved.</p>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
    </>
  );
};
export default Layout;

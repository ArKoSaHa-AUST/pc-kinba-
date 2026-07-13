import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="gradient-text">PC-KINBA</h3>
            <p className="footer-desc">
              The smartest place to build your dream PC. AI-powered hardware recommendations for
              everyone.
            </p>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">PC Builder</a>
              </li>
              <li>
                <a href="#">AI Assistant</a>
              </li>
              <li>
                <a href="#">Compare GPUs</a>
              </li>
              <li>
                <a href="#">Compare CPUs</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Build Guides</a>
              </li>
              <li>
                <a href="#">Compatibility DB</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest hardware news and price drops.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button className="button-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PC-KINBA. All rights reserved.</p>
          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

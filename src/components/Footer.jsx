import myimg from "../../public/assets/home-img/my.png";


export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          {/* <!-- Logo and Address --> */}
          <div className="footer-logo">
            <h2>
              <span>💫</span>APNA MANUU
            </h2>
            <p>
            Maulana Azad National Urdu University
              <br />
              hyderabad
            </p>
            <div className="f-img-flex">
             <div className="f-img"> <img src={myimg} alt="sam" />
              </div>
              <div><p> © 2025 Samir Khan. All rights reserved</p></div>
              
            </div>
          </div>
          {/* <!-- Links --> */}
          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Members</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>
          {/* <!-- Connect --> */}
          <div className="footer-links">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

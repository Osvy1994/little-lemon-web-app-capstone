import "../stylesheets/LandingPage.css";

function LandingPage() {
  return (
    <div id="home-section" className="landing-main-container">
      <div className="landing-page-container">
        <div>
          <img
            id="logo"
            src="Little-Lemon-Logo-white.png"
            alt="Little Lemon Logo"
            width="350px"
            height="200px"
          />
        </div>
        <div className="info">
          <p>
            Little Lemon is a Mediterranean inspired bar and small plates
            restaurant focusing on fresh produce and big flavours, offering
            bespoke cocktails and a premium wine selection.
          </p>
          <div className="circle-logo-container">
            <img
              className="circle-logo"
              src="Little-Lemon-Logo-circle-white.png"
              alt="Little Lemon Logo circle"
              width="250px"
              height="250px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

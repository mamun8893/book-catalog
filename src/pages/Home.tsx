import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(/banner-bg.jpg)` }}>
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-left">
            <div className="content">
              <p>The Bookworm Editors'</p>
              <h2>
                Featured Books of the <span>February</span>
              </h2>
              <Link to="/">See More</Link>
            </div>
          </div>
          <div className="banner-right">
            <img src="/banner-img.png" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

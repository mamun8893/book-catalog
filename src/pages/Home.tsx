import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="banner"
        style={{ backgroundImage: `url(/banner-bg.jpg)` }}
      >
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
      <div className="recent-book">
        <div className="container">
          <div className="section-title">
            <h2>Recent Books</h2>
          </div>
          <div className="book-wrapper">
            <div className="book-item">
              <div className="item-wrap">
                <div className="img">
                  <img
                    src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg"
                    alt="book"
                  />
                </div>
                <div className="content">
                  <p className="genere">Fiction</p>
                  <h4>
                    Think Like a Monk: Train Your Mind for Peace and Purpose
                    Everyday
                  </h4>
                  <p>Joy Shetty</p>
                  <p>20 july 2023</p>
                </div>
              </div>
            </div>
            <div className="book-item">
              <div className="item-wrap">
                <div className="img">
                  <img
                    src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg"
                    alt="book"
                  />
                </div>
                <div className="content">
                  <p className="genere">Fiction</p>
                  <h4>
                    Think Like a Monk: Train Your Mind for Peace and Purpose
                    Everyday
                  </h4>
                  <p>Joy Shetty</p>
                  <p>20 july 2023</p>
                </div>
              </div>
            </div>
            <div className="book-item">
              <div className="item-wrap">
                <div className="img">
                  <img
                    src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg"
                    alt="book"
                  />
                </div>
                <div className="content">
                  <p className="genere">Fiction</p>
                  <h4>
                    Think Like a Monk: Train Your Mind for Peace and Purpose
                    Everyday
                  </h4>
                  <p>Joy Shetty</p>
                  <p>20 july 2023</p>
                </div>
              </div>
            </div>
            <div className="book-item">
              <div className="item-wrap">
                <div className="img">
                  <img
                    src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg"
                    alt="book"
                  />
                </div>
                <div className="content">
                  <p className="genere">Fiction</p>
                  <h4>
                    Think Like a Monk: Train Your Mind for Peace and Purpose
                    Everyday
                  </h4>
                  <p>Joy Shetty</p>
                  <p>20 july 2023</p>
                </div>
              </div>
            </div>
            <div className="book-item">
              <div className="item-wrap">
                <div className="img">
                  <img
                    src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img1.jpg"
                    alt="book"
                  />
                </div>
                <div className="content">
                  <p className="genere">Fiction</p>
                  <h4>
                    Think Like a Monk: Train Your Mind for Peace and Purpose
                    Everyday
                  </h4>
                  <p>Joy Shetty</p>
                  <p>20 july 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

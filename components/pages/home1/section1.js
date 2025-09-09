import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section className="s-feature tf-spacing-3">
        <h2
          style={{
            fontSize: "46px",
            fontWeight: "500",
            marginTop: "20px",
            paddingLeft: "30px",
          }}
        >
          Our Services
        </h2>
		  <p className="title font-main-2 fw-7"
		  style={{
          
            marginTop: "20px",
            paddingLeft: "30px",
          }} 
		  >
                  At B & B Wealth, we design solutions that align with your financial goals and risk appetite
                </p>
        <div className="tf-container w-1780">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="wg-feature-item tf-hover-icon wow fadeInUp"
                data-wow-delay="0s"
              >
                <div className="icon-item hover-icon">
                  <i className="flaticon-target" />
                </div>
                <p className="title font-main-2 fw-7">
                  <Link href="/our-service">Portfolio Management</Link>
                </p>
                <p className="text">
                  Tailored strategies to protect and grow your wealth.
                  <br></br>
                  Tailored investment strategies across:
                </p>

                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="/service-details">
                        FGN Bonds & Treasury Bills
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="/service-details">
                        Money Market Instruments
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="/service-details">Eurobonds</Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="/service-details">
                        Equities (NGX-listed shares)
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="wg-feature-item style-2 tf-hover-icon wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icon-item hover-icon">
                  <i className="flaticon-rocket" />
                </div>
                <p className="title font-main-2 fw-7">
                  <Link href="/our-service-02" style={{ color: "#ffffff" }}>
                    Equities & Fixed Income Trading
                  </Link>
                </p>
                <p className="text" style={{ color: "#ffffff" }}>
                  Direct access to Nigeria’s markets with global expertise
                  <br></br>
                  Direct access to:
                </p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        NGX-listed shares and securities
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        Initial Public Offerings (IPOs) & Rights Issues
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        Government securities (FGN Bonds, T-Bills, Sukuks)
                      </Link>
                    </p>
            
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        Corporate actions advisory
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="wg-feature-item style-2 tf-hover-icon wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="icon-item hover-icon">
                  <i className="flaticon-rocket" />
                </div>
                <p className="title font-main-2 fw-7">
                  <Link href="/our-service-02" style={{ color: "#ffffff" }}>
                    Financial Planning
                  </Link>
                </p>
                <p className="text" style={{ color: "#ffffff" }}>
                  Secure your future with disciplined, goal-focused plans.
                  <br></br>
                  Helping you secure your future with:
                </p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        Retirement planning
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        Education funding strategies
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        Estate and succession planning
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="icon-star-of-life"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <p>
                      <Link
                        href="/service-details"
                        style={{ color: "#ffffff" }}
                      >
                        Protection and insurance advisory
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="wg-feature-item style-3 tf-hover-icon wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="icon-item hover-icon">
                  <i className="flaticon-megaphone" />
                </div>
                <p className="title font-main-2 fw-7">
                  <Link href="/our-service">
                    {" "}
                    Corporate & Institutional Solutions
                  </Link>
                </p>
                <p className="text">
                  Smart investment frameworks for organizations that last{" "}
                  <br></br>
                  Supporting organizations with:
                </p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="/service-details">
                        Treasury outsourcing (cash management solutions)
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="/service-details">
                        Investment policy design & implementation
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="/service-details">
                        Endowment and reserve fund management
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

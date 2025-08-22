import Link from "next/link";

export default function Section4() {
  return (
    <>
      <section className="s-solution tf-spacing-1">
        <div className="mb-70">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
                <div className="content">
                  <p className="s-title  text-anime-wave">
                    Driving Wealth Growth through Sophisticated{" "}
                    <span>Investment Solutions</span>
                  </p>
                  <p className="text ">
                    We combine institutional-grade research with technology to deliver 
                    diversified portfolios, real-time visibility, and proactive advice—tailored 
                    to your goals, risk tolerance, and timeline. Through disciplined investing, 
                    transparency, and a relentless focus on long-term performance, we aim to be 
                    your trusted partner in building lasting wealth.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="content-right">
                  <div className="wg-curve-text tf-animate__box-2 animate__slow">
                    <div className="icon">
                      <i className="flaticon-rocket" />
                    </div>
                    <div className="text-rotate">
                      <div className="circle">
                        <div id="circularText" className="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-container w-1780">
          <div className="row">
            <div className="col-lg-4">
              <div className="wg-feature-item tf-hover-icon">
                <div className="icon-item hover-icon">
                  <i className="flaticon-target" />
                </div>
                <p className="title font-main-2 fw-7">
                  <Link href="/our-service">Investment Strategy</Link>
                </p>
                <p className="text">
                  Goals-based portfolio construction designed to address the unique 
                  financial objectives and risk tolerance of each client.
                </p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="#">
                        Data-Driven Portfolio Construction
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="#">
                        Risk-Managed Diversification
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link href="#">
                        Goal-Oriented Asset Allocation
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="wg-feature-item style-2 tf-hover-icon">
                <div className="icon-item hover-icon">
                  <i className="flaticon-rocket" />
                </div>
                <Link href="/our-service-02">
                  <p className="title font-main-2 fw-7">
                    Wealth Management &amp; Planning
                  </p>
                </Link>
                <p className="text text-white">
                  Our comprehensive wealth management services are designed to 
                  maximize your wealth potential through sophisticated investment strategies.
                </p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3 text-white">
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>Comprehensive Financial Planning</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>Tax-Aware Optimization</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>Performance Monitoring</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="wg-feature-item last style-3 tf-hover-icon">
                <div className="icon-item hover-icon">
                  <i className="flaticon-megaphone" />
                </div>
                <p className="title font-main-2 fw-7">
                  <Link href="/our-service" className=" hover-text-main-yellow">
                    Asset Management Solutions
                  </Link>
                </p>
                <p className="text">
                  Our asset management solutions combine broad diversification 
                  with cost-effective instruments to optimize your investment outcomes.
                </p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link
                        href="#"
                        className=" hover-text-main-yellow"
                      >
                        Portfolio Diversification
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link
                        href="#"
                        className=" hover-text-main-yellow"
                      >
                        Alternative Investments
                      </Link>
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-star-of-life" />
                    </div>
                    <p>
                      <Link
                        href="#"
                        className=" hover-text-main-yellow"
                      >
                        ESG Investment Options
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
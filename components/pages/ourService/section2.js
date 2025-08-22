import Image from "next/image";
import Link from "next/link";
export default function Section2() {
  return (
    <>
      <section className="s-process tf-spacing-1">
        <div className="tf-overlay" />
        <div className="bg-image">
          <div className="rellax" data-rellax-speed="0.3">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src="/images/section/process.jpg"
              alt="Our Process"
              className="lazyload"
            />
          </div>
        </div>
        <div className="content-wrap">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="heading mb-50">
                  <p className="s-sub-title text-white mb-15">
                    <i className="icon-angles-right moveLeftToRight" />
                    Our Process
                  </p>
                  <p className="s-title text-white text-anime-wave">
                    A Clear Roadmap <br />
                    for
                    <span> Every Service </span>
                  </p>
                </div>
                <div className="wg-step-skill ">
                  <p className="title font-main-2 mb-30 ">
                    From discovery to long-term partnership, our process is
                    structured, transparent, and client-centered.
                  </p>
                  <span className="line" />
                  <ul className="benefit-list">
                    <li>
                      <div className="icon">
                        <i className="icon-check-2" />
                      </div>
                      <p>
                        Thorough discovery and understanding of client needs
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-check-2" />
                      </div>
                      <p>Structured planning and portfolio design phases</p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-check-2" />
                      </div>
                      <p>Ongoing reviews, monitoring, and adjustments</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 ">
                {/* Private Wealth Management */}
                <div
                  className="wg-process mb-10 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="right">
                    <div className="step-number">
                      <span>01</span>
                    </div>
                    <Link
                      href="/service-details/private-wealth"
                      className="name-process font-main-2"
                    >
                      Private Wealth Management
                    </Link>
                  </div>
                  <p className="text">
                    Discovery (1–2 weeks) → Plan & Portfolio (2–4 weeks) →
                    Ongoing Reviews
                  </p>
                </div>

                {/* Discretionary Portfolio Management */}
                <div
                  className="wg-process mb-10 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="right">
                    <div className="step-number">
                      <span>02</span>
                    </div>
                    <Link
                      href="/service-details/portfolio"
                      className="name-process font-main-2"
                    >
                      Discretionary Portfolio Management
                    </Link>
                  </div>
                  <p className="text">
                    Mandate Setup (1–2 weeks) → Investment & Monitoring
                    (Ongoing)
                  </p>
                </div>

                {/* Advisory & Financial Planning */}
                <div
                  className="wg-process mb-10 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="right">
                    <div className="step-number">
                      <span>03</span>
                    </div>
                    <Link
                      href="/service-details/advisory"
                      className="name-process font-main-2"
                    >
                      Advisory & Financial Planning
                    </Link>
                  </div>
                  <p className="text">
                    Plan Engagement (2–3 weeks) → Implementation Support
                    (Optional)
                  </p>
                </div>

                {/* Retirement & Pension Planning */}
                <div
                  className="wg-process mb-10 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="right">
                    <div className="step-number">
                      <span>04</span>
                    </div>
                    <Link
                      href="/service-details/retirement"
                      className="name-process font-main-2"
                    >
                      Retirement & Pension Planning
                    </Link>
                  </div>
                  <p className="text">
                    Plan (2–3 weeks) → Implementation & Review (Ongoing)
                  </p>
                </div>

                {/* Estate & Trust */}
                <div
                  className="wg-process mb-10 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="right">
                    <div className="step-number">
                      <span>05</span>
                    </div>
                    <Link
                      href="/service-details/estate"
                      className="name-process font-main-2"
                    >
                      Estate & Trust
                    </Link>
                  </div>
                  <p className="text">
                    Discovery (2–4 weeks) → Structure & Setup (with partners)
                  </p>
                </div>

                {/* Alternatives */}
                <div
                  className="wg-process mb-10 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="right">
                    <div className="step-number">
                      <span>06</span>
                    </div>
                    <Link
                      href="/service-details/alternatives"
                      className="name-process font-main-2"
                    >
                      Alternatives
                    </Link>
                  </div>
                  <p className="text">
                    Diligence (4–8 weeks) → Allocation & Monitoring
                  </p>
                </div>

                {/* Corporate & Institutional */}
                <div className="wg-process wow fadeInUp" data-wow-delay="0.6s">
                  <div className="right">
                    <div className="step-number">
                      <span>07</span>
                    </div>
                    <Link
                      href="/service-details/corporate"
                      className="name-process font-main-2"
                    >
                      Corporate & Institutional
                    </Link>
                  </div>
                  <p className="text">
                    Policy Design (2–4 weeks) → Portfolio & Reporting (Ongoing)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import { sliderTestimonial2 } from "@/utils/swiperOptions";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Section4() {
  return (
    <>
      <section className="s-service-4 tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading mb-70">
                <p className="s-sub-title mb-15 justify-center">
                  <i className="icon-angles-right moveLeftToRight" />
                  Our Services
                </p>
                <p className="s-title text-center text-anime-wave">
                  At B & B Wealth, we design solutions that align with your
                  <span> financial goals and risk appetite.</span>
                </p>
              </div>

              <div className="grid-layout-3">
                {/* Private Wealth Management */}
                <div className="card-service-2 tf-hover">
                  <div className="image hover-1 hover-14">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/widget/card-service-9.jpg"
                      alt="Private Wealth Management"
                      className="lazyload"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-return-of-investment" />
                    </div>
                    <Link
                      href="/service-details/private-wealth"
                      className="title fw-7"
                    >
                      Portfolio Management - Tailored strategies to protect and
                      grow your wealth.
                    </Link>
                    <p className="text">
                      Tailored investment strategies across:
                      <br></br>• FGN Bonds & Treasury Bills
                      <br></br>• Money Market Instruments
                      <br></br>• Eurobonds
                      <br></br>• Equities (NGX-listed shares)
                    </p>
                    <Link
                      href="/service-details/private-wealth"
                      className="tf-btn-readmore style-3"
                    >
                      Learn More <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>

                {/* Discretionary Portfolio Management */}
                <div className="card-service-2 tf-hover">
                  <div className="image hover-1 hover-14">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/page-title/our-services.jpg"
                      alt="Discretionary Portfolio Management"
                      className="lazyload"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-data-management" />
                    </div>
                    <Link
                      href="/service-details/portfolio"
                      className="title fw-7"
                    >
                      Equities & Fixed Income Trading - Direct access to
                      Nigeria’s markets with global expertise
                    </Link>
                    <p className="text">
                      Direct access to:
                      <br></br>• NGX-listed shares and securities
                      <br></br>• Initial Public Offerings (IPOs) & Rights Issues
                      <br></br>• Government securities (FGN Bonds, T-Bills,
                      Sukuks)
                      <br></br>• Corporate actions advisory
                    </p>
                    <Link
                      href="/service-details/portfolio"
                      className="tf-btn-readmore style-3"
                    >
                      Learn More <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>

                {/* Advisory & Financial Planning */}
                <div className="card-service-2 tf-hover">
                  <div className="image hover-1 hover-14">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/widget/card-service-6.jpg"
                      alt="Advisory & Financial Planning"
                      className="lazyload"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-solution" />
                    </div>
                    <Link
                      href="/service-details/advisory"
                      className="title fw-7"
                    >
                      Financial Planning - Secure your future with disciplined,
                      goal-focused plans.
                    </Link>
                    <p className="text">
                      Helping you secure your future with:
                      <br></br>• Retirement planning
                      <br></br>• Education funding strategies
                      <br></br>• Estate and succession planning
                      <br></br>• Protection and insurance advisory
                    </p>
                    <Link
                      href="/service-details/advisory"
                      className="tf-btn-readmore style-3"
                    >
                      Learn More <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>

                {/* Retirement & Pension Planning */}
                <div className="card-service-2 tf-hover">
                  <div className="image hover-1 hover-14">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/widget/card-project-s2-3.jpg"
                      alt="Retirement & Pension Planning"
                      className="lazyload"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-team" />
                    </div>
                    <Link
                      href="/service-details/retirement"
                      className="title fw-7"
                    >
                      Corporate & Institutional Solutions - Smart investment
                      frameworks for organizations that last
                    </Link>
                    <p className="text">
                      Supporting organizations with:
                      <br></br>• Treasury outsourcing (cash management
                      solutions)
                      <br></br>• Investment policy design & implementation
                      <br></br>• Endowment and reserve fund management
                    </p>
                    <Link
                      href="/service-details/retirement"
                      className="tf-btn-readmore style-3"
                    >
                      Learn More <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

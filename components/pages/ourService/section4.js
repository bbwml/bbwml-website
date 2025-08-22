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
                  Comprehensive Wealth Management <br />
                  and
                  <span> Advisory Solutions </span>
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
                      <i className="flaticon-data-management" />
                    </div>
                    <Link
                      href="/service-details/private-wealth"
                      className="title fw-7"
                    >
                      Private Wealth Management
                    </Link>
                    <p className="text">
                      For founders, professionals, and families seeking ongoing,
                      holistic financial planning, portfolio management, and
                      estate coordination with dedicated advisor support.
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
                      <i className="flaticon-return-of-investment" />
                    </div>
                    <Link
                      href="/service-details/portfolio"
                      className="title fw-7"
                    >
                      Discretionary Portfolio Management
                    </Link>
                    <p className="text">
                      For hands-off investors who want us to manage day-to-day
                      decisions with bespoke or model-driven multi-asset
                      portfolios, systematic rebalancing, and performance
                      reporting.
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
                      Advisory & Financial Planning
                    </Link>
                    <p className="text">
                      For DIY investors or families needing expert planning,
                      retirement projections, insurance and liquidity
                      strategies, plus ongoing or one-time advisory sessions.
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
                      Retirement & Pension Planning
                    </Link>
                    <p className="text">
                      For individuals structuring tax-efficient retirement
                      income with strategies for pension consolidation,
                      withdrawal planning, and protection against longevity
                      risks.
                    </p>
                    <Link
                      href="/service-details/retirement"
                      className="tf-btn-readmore style-3"
                    >
                      Learn More <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>

                {/* Estate & Trust */}
                <div className="card-service-2 tf-hover">
                  <div className="image hover-1 hover-14">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/widget/card-service-8.jpg"
                      alt="Estate & Trust"
                      className="lazyload"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-human-resources" />
                    </div>
                    <Link href="/service-details/estate" className="title fw-7">
                      Estate & Trust
                    </Link>
                    <p className="text">
                      For families focused on intergenerational wealth transfer
                      with will & trust coordination, gifting strategies, and
                      family governance frameworks.
                    </p>
                    <Link
                      href="/service-details/estate"
                      className="tf-btn-readmore style-3"
                    >
                      Learn More <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>

                {/* Alternatives */}
                <div className="card-service-2 tf-hover">
                  <div className="image hover-1 hover-14">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/widget/card-service-9.jpg"
                      alt="Alternative Investments"
                      className="lazyload"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-target-1" />
                    </div>
                    <Link
                      href="/service-details/alternatives"
                      className="title fw-7"
                    >
                      Alternatives (Eligible Investors)
                    </Link>
                    <p className="text">
                      For qualified clients seeking diversification via private
                      credit, real estate, and alternative investments with full
                      due diligence and liquidity education.
                    </p>
                    <Link
                      href="/service-details/alternatives"
                      className="tf-btn-readmore style-3"
                    >
                      Learn More <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>

                {/* Corporate & Institutional */}
                <div className="card-service-2 tf-hover">
                  <div className="image hover-1 hover-14">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/widget/card-service-10.jpg"
                      alt="Corporate & Institutional Services"
                      className="lazyload"
                    />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-workflow" />
                    </div>
                    <Link
                      href="/service-details/corporate"
                      className="title fw-7"
                    >
                      Corporate & Institutional
                    </Link>
                    <p className="text">
                      For businesses and organizations managing reserves and
                      benefit plans with treasury solutions, IPS development,
                      and board-level reporting.
                    </p>
                    <Link
                      href="/service-details/corporate"
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

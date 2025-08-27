import CounterUp from "@/components/elements/CounterUp";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section className="s-about tf-spacing-7">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-7">
              <div className="heading">
                <p className="s-sub-title mb-16">
                  <i className="icon-angles-right moveLeftToRight" />
                  about company
                </p>
                <p className="s-title mb-70 text-anime-wave">Who We Are</p>
                <div className="image">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/images/section/process.jpg"
                    data-src="/images/section/about-6.jpg"
                    alt=""
                    className="lazyload"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="content-right">
                <div className="wg-counter style-4 pt-5">
                  <div className="odometer style-4">
                    <CounterUp count={15} />
                  </div>
                  <span className="sub-odo">+</span>
                </div>
                <p className="sub-counter font-main-2 fw-5 fs-20 mb-70 mt-5">
                  Years Of Experience In Wealth Management
                </p>
                <div className="image tf-hover">
                  {/* <div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/feature.jpg" data-src="/images/section/about-7.jpg" alt="" className="lazyload tf-animate-2" />
									</div> */}
                </div>
                <p className="text mb-40">
                  B & B Wealth Management is a SEC-licensed Nigerian Investment
                  and Wealth Management firm. We provide professional wealth
                  management, equities trading, and investment advisory services
                  tailored to the unique needs of our clients. Our mission is
                  simple: to empower clients to achieve financial independence
                  and long-term security through disciplined strategies and
                  trusted partnerships.
                </p>
                {/* <ul className="list mb-40">
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p className='text text-black'>
											Institutional-Grade Research
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p className='text text-black'>
											Personalized Investment Strategies
										</p>
									</li>
								</ul> */}
                <Link href="/our-service" className="tf-btn text-anime-style-1">
                  Get Started
                  <i className="icon-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

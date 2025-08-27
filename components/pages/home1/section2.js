import Image from "next/image";
import Link from "next/link";
import SlidingText from "../../slidingHub/SlidingText";

export default function Section2() {
  return (
    <>
      <section className="s-about-company tf-spacing-2">
        <div className="relative z-5">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content-section">
                  <p className="s-sub-title">
                    <i className="icon-angles-right moveLeftToRight" />
                    about company
                  </p>
                  <p className="s-title mb-60 text-anime-wave-right text-clamp-4">
                    About Us
                  </p>
                  <ul className="list mb-50">
                    <li>
                      <p className="font-main-2 text-black">Who We Are</p>
                      <p className="text">
                        B & B Wealth Management is a SEC-licensed Nigerian
                        Investment and Wealth Management firm. We provide
                        professional wealth management, equities trading, and
                        investment advisory services tailored to the unique
                        needs of our clients. Our mission is simple: to empower
                        clients to achieve financial independence and long-term
                        security through disciplined strategies and trusted
                        partnerships.
                      </p>
                    </li>
                    <li>
                      <p className="font-main-2 text-black">
                        What Sets Us Apart
                      </p>
                      <p className="text">
                        <br></br>• Licensed and regulated by the Securities and
                        Exchange Commission (SEC) Nigeria
                        <br></br>• Local market expertise combined with
                        global-standard processes
                        <br></br>• Transparent fee structures and strong
                        governance
                        <br></br>• Technology-driven reporting and research
                        insights
                        <br></br>• Decades of combined experience serving HNIs,
                        diaspora, corporates, and institutions
                      </p>
                    </li>
                  </ul>
                  <Link href="/about-us" className="tf-btn">
                    Learn More About Us
                    <i className="icon-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="image-wrap">
                  <div className="image">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/section/bg-service.jpg"
                      data-src="/images/section/s-about.jpg"
                      alt=""
                      className="lazyload tf-animate-2"
                    />
                  </div>
                  <span className="half-circle item-1 wow rollInRight" />
                  <span
                    className="half-circle item-2 wow rollInRight"
                    data-wow-delay="0.5s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SlidingText />
      </section>
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ImTarget } from "react-icons/im";

export default function Section2() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4"
    );

    if (!elements.length) return;

    const isSmallScreen = window.matchMedia("(max-width: 550px)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-animate");
          }
        });
      },
      {
        root: null, // viewport
        threshold: isSmallScreen ? 0.2 : 0.3, // Adjust based on screen size
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <section className="s-why-choose-3 tf-spacing-8">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-7">
              <div className="wg-company">
                <ul className="list">
                  <li className="wow fadeInUp" data-wow-delay="0s">
                    <div className="title">
                      <div className="icon">
                        <i className="flaticon-rocket" />
                      </div>
                      <Link href="/#">Who Sets Us Apart</Link>
                    </div>
                    <p className="text">
                      • Licensed and regulated by the Securities and Exchange
                      Commission (SEC) Nigeria
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
                  {/* <li className="wow fadeInUp" data-wow-delay="0s">
                    <div className="title">
                      <div className="icon">
                        <ImTarget style={{ fontSize: "24px" }} />
                      </div>
                      <Link href="/#">What Sets Us Apart</Link>
                    </div>
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
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image tf-hover">
                <div className="hover-1">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/images/widget/card-service-6.jpg"
                    data-src="/images/section/why.jpg"
                    alt=""
                    className="lazyload tf-animate-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

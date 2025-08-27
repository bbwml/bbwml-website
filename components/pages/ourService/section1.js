import Image from "next/image";
import Link from "next/link";
export default function Section1() {
  return (
    <>
      <section className="s-we-do tf-spacing-3">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading mb-70">
                <p className="s-sub-title mb-15 justify-center">
                  <i className="icon-angles-right moveLeftToRight" />
                Why Choose B & B Wealth
                </p>
                <p className="s-title text-center text-anime-style-2">
                  When you partner with us, you gain more than a wealth manager—
                  <span> you gain a trusted ally. </span>
                </p>
              </div>

              <div className="feature-group overflow-hidden">
                {/* Intro Feature 1 */}
                <div className="box-icon style-8">
                  <div className="icon">
                    <i className="flaticon-data-management" />
                  </div>
                  <Link
                    href="/service-details/private-wealth"
                    className="title"
                  >
                    SEC Licensed & Regulated
                  </Link>
                  <span className="line mb-30" />
                  <p className="text">
                    {/* From retirement projections to risk assessments, we build a
                    complete financial plan tailored to your goals and family
                    needs. */}
                  </p>
                  <div className="image">
                    <Link href="/service-details/private-wealth">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/images/section/four.jpg"
                        alt="Holistic Financial Planning"
                        className="lazyload"
                      />
                    </Link>
                  </div>
                </div>

                {/* Intro Feature 2 */}
                <div className="box-icon style-8">
                  <div className="icon">
                    <i className="flaticon-return-of-investment" />
                  </div>
                  <Link href="/service-details/portfolio" className="title">
                    Proven Track Record of Performance
                  </Link>
                  <span className="line mb-30" />
                  <p className="text">
                    {/* Proven Track Record of Performance */}
                  </p>
                  <div className="image">
                    <Link href="/service-details/portfolio">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/images/section/feature.jpg"
                        alt="Portfolio Management"
                        className="lazyload"
                      />
                    </Link>
                  </div>
                </div>

                {/* Intro Feature 3 */}
                <div className="box-icon style-8">
                  <div className="icon">
                    <i className="flaticon-team" />
                  </div>
                  <Link href="/service-details/estate" className="title">
                   Transparent Fees, No Hidden Costs
                  </Link>
                  <span className="line mb-30" />
                  <p className="text">
                    {/* Partnering with legal experts to structure wills, trusts,
                    and governance frameworks for smooth intergenerational
                    wealth transfer. */}
                  </p>
                  <div className="image">
                    <Link href="/service-details/estate">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/images/section/process.jpg"
                        alt="Estate & Trust Planning"
                        className="lazyload"
                      />
                    </Link>
                  </div>
                </div>
                <div className="box-icon style-8">
                  <div className="icon">
                    <i className="flaticon-team" />
                  </div>
                  <Link href="/service-details/estate" className="title">
                   Innovative Research & Market Insights
                  </Link>
                  <span className="line mb-30" />
                  <p className="text">
                    {/* Partnering with legal experts to structure wills, trusts,
                    and governance frameworks for smooth intergenerational
                    wealth transfer. */}
                  </p>
                  <div className="image">
                    <Link href="/service-details/estate">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/images/section/process.jpg"
                        alt="Estate & Trust Planning"
                        className="lazyload"
                      />
                    </Link>
                  </div>
                </div>
                 <div className="box-icon style-8">
                  <div className="icon">
                    <i className="flaticon-data-management" />
                  </div>
                  <Link
                    href="/service-details/private-wealth"
                    className="title"
                  >
                    Decades of Combined Local & International Experience
                  </Link>
                  <span className="line mb-30" />
                  <p className="text">
                    {/* From retirement projections to risk assessments, we build a
                    complete financial plan tailored to your goals and family
                    needs. */}
                  </p>
                  <div className="image">
                    <Link href="/service-details/private-wealth">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/images/section/four.jpg"
                        alt="Holistic Financial Planning"
                        className="lazyload"
                      />
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

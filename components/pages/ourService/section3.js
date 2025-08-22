import Image from "next/image";
import Link from "next/link";
export default function Section3() {
  return (
    <>
      <section className="s-pricing tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading mb-70 text-center">
                <p className="s-sub-title mb-15">
                  <i className="icon-angles-right moveLeftToRight" />
                  Pricing Model
                </p>
                <p className="s-title text-anime-wave">
                  Transparent & Flexible <br />
                  <span>Fee Structures</span>
                </p>
                <p className="text mt-20">
                  We align our pricing with your needs — whether you prefer
                  assets-under-management (AUM) fees, flat retainers, or bespoke
                  structures for complex requirements.
                </p>
              </div>

              <div className="grid-layout-3">
                {/* Private Wealth Management */}
                <div className="card-service-2 pricing-card tf-hover">
                  <div className="content">
                    <h3 className="title fw-7">Private Wealth Management</h3>
                    <p className="text">
                      Fees: 1.0% – 1.5% AUM
                      <br />
                      Bespoke retainer available for complex needs
                    </p>
                  </div>
                </div>

                {/* Portfolio Management */}
                <div className="card-service-2 pricing-card tf-hover">
                  <div className="content">
                    <h3 className="title fw-7">
                      Discretionary Portfolio Management
                    </h3>
                    <p className="text">
                      Fees: 0.7% – 1.2% AUM
                      <br />
                      Depending on size and complexity
                    </p>
                  </div>
                </div>

                {/* Advisory & Financial Planning */}
                <div className="card-service-2 pricing-card tf-hover">
                  <div className="content">
                    <h3 className="title fw-7">
                      Advisory & Financial Planning
                    </h3>
                    <p className="text">
                      Flat fee ■[X]
                      <br />
                      Quarterly retainer option
                    </p>
                  </div>
                </div>

                {/* Retirement Planning */}
                <div className="card-service-2 pricing-card tf-hover">
                  <div className="content">
                    <h3 className="title fw-7">
                      Retirement & Pension Planning
                    </h3>
                    <p className="text">
                      Flat fee
                      <br />
                      or AUM-based if discretionary
                    </p>
                  </div>
                </div>

                {/* Estate & Trust */}
                <div className="card-service-2 pricing-card tf-hover">
                  <div className="content">
                    <h3 className="title fw-7">Estate & Trust</h3>
                    <p className="text">
                      Bespoke fees
                      <br />
                      Dependent on structures and legal partners
                    </p>
                  </div>
                </div>

                {/* Alternatives */}
                <div className="card-service-2 pricing-card tf-hover">
                  <div className="content">
                    <h3 className="title fw-7">
                      Alternatives (Eligible Investors)
                    </h3>
                    <p className="text">
                      Access fees
                      <br />+ underlying manager fees apply
                    </p>
                  </div>
                </div>

                {/* Corporate & Institutional */}
                <div className="card-service-2 pricing-card tf-hover">
                  <div className="content">
                    <h3 className="title fw-7">Corporate & Institutional</h3>
                    <p className="text">
                      Tiered AUM fees
                      <br />
                      or project-based fees
                    </p>
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

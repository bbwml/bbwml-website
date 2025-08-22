import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section className="s-job tf-spacing-9">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading mb-50">
                <p className="s-title text-center mb-15 text-anime-style-2">
                  Get In
                  <span>
                    Touch
                  </span>
                </p>
                <p className="text text-center">
                  Have a question or need assistance? We'd love to hear from you. <br />
                  Reach out to us through any of the following ways and we'll get back to you soon.
                </p>
              </div>
              <div className="grid-layout-3">
                <div className="wg-job wow fadeInUp" data-wow-delay="0s">
                  <div className="name-job">
                    Phone Numbers
                  </div>
                  <p className="sub-job part">
                    Available during business hours
                  </p>
                  <p className="text">
                    Call us directly for immediate assistance and quick support
                  </p>
                   <p className="text font-sm">
                    <small>
                    09163465130, 08188890240
                    </small>
                  </p>
                </div>
                <div className="wg-job wow fadeInUp" data-wow-delay="0.1s ">
                  <div className="name-job">
                    Email Address
                  </div>
                  <p className="sub-job part">
                    Response within 24hrs
                  </p>
                  <p className="text">
                    Send us an email for detailed inquiries and documentation
                  </p>
                   <p className="text font-sm">
                    <small>
                    info@bbwml.com
                    </small>
                  </p>
                </div>
                <div className="wg-job wow fadeInUp" data-wow-delay="0s">
                  <div className="name-job">
                    Office Address
                  </div>
                 <p className="sub-job part">
                    Mon - Fri, 9AM - 5PM
                  </p>
                  <p className="text">
                    Visit us at our office location for in-person consultations
                  </p>
                  <p className="text font-sm">
                    <small>1st Floor Ogun House, Ralph Shodeinde Street, Central Business District, Abuja</small>
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
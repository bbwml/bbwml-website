'use client'
import { useState } from 'react'
import Section1 from "../contact/section1"

export default function TermsPageContent() {
  const [open, setOpen] = useState(1)
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  const toggle = (key) => setOpen(prev => prev === key ? null : key)

  return (
    <section className="s-page-faq tf-spacing-2 legal-theme">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content">
              <p className="s-sub-title">
                <i className="icon-angles-right moveLeftToRight" />
                Legal
              </p>
              <p className="s-title mb-20 text-anime-wave">
                B &amp; B Wealth
                <span> Legal Hub</span>
              </p>
              <p className="text mb-30">Last updated: {lastUpdated}</p>
              <span className="line mb-30" />

              <div className="tf-accordion style-4 style-2 accordion mb-50" id="legalAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" onClick={() => toggle(1)}>
                    <button className={`accordion-button ${open === 1 ? 'collapsed' : ''}`} type="button">
                      1. Website Terms & Conditions
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${open === 1 ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-10"><strong>1.1 Our Services</strong></p>
                      <p className="mb-15">B &amp; B Wealth provides discretionary and non-discretionary portfolio management, investment advisory, and related financial services. Use of our website does not create a client relationship. Formal services are only provided under a signed Independent Client Agreement.</p>
                      <p className="mb-10"><strong>1.2 No Offer or Advice</strong></p>
                      <p className="mb-15">All website content is for informational purposes only. Nothing here constitutes financial, legal, or tax advice. You should seek professional advice before making investment decisions.</p>
                      <p className="mb-10"><strong>1.3 Fees</strong></p>
                      <ul className="mb-15" style={{ listStyle: 'disc', paddingLeft: 20 }}>
                        <li>Management Fee: 2.5% of AUM per annum (charged quarterly in advance).</li>
                        <li>Performance Fee: 15% (profits above ₦1m) or 30% (profits below ₦1m), charged bi-annually in arrears.</li>
                        <li>Third-party fund manager fees (where applicable).</li>
                      </ul>
                      <p className="mb-10"><strong>1.4 Liability</strong></p>
                      <p className="mb-15">We are not liable for investment losses except where caused by wilful misconduct, gross negligence, or bad faith.</p>
                      <p className="mb-10"><strong>1.5 Governing Law</strong></p>
                      <p className="mb-10">These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" onClick={() => toggle(2)}>
                    <button className={`accordion-button ${open === 2 ? 'collapsed' : ''}`} type="button">
                      2. Privacy Policy
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${open === 2 ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-10"><strong>2.1 What We Collect</strong></p>
                      <ul className="mb-15" style={{ listStyle: 'disc', paddingLeft: 20 }}>
                        <li>Personal identification data (e.g., name, ID numbers).</li>
                        <li>Contact details (email, phone, address).</li>
                        <li>Financial information (bank details, assets, transaction history).</li>
                        <li>Technical data (IP address, device/browser info, cookies).</li>
                      </ul>
                      <p className="mb-10"><strong>2.2 How We Use It</strong></p>
                      <ul className="mb-15" style={{ listStyle: 'disc', paddingLeft: 20 }}>
                        <li>To provide and manage investment services.</li>
                        <li>To comply with regulatory obligations.</li>
                        <li>To verify identity and prevent fraud.</li>
                        <li>To improve services and communications.</li>
                      </ul>
                      <p className="mb-10"><strong>2.3 Your Rights</strong></p>
                      <p className="mb-10">Under NDPR and applicable laws, you have rights to access, correct, delete, and restrict processing of your data.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" onClick={() => toggle(3)}>
                    <button className={`accordion-button ${open === 3 ? 'collapsed' : ''}`} type="button">
                      3. Cookie Policy
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${open === 3 ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-10"><strong>3.1 What Are Cookies?</strong></p>
                      <p className="mb-15">Cookies are small files stored on your device that improve website functionality and user experience.</p>
                      <p className="mb-10"><strong>3.2 Types We Use</strong></p>
                      <ul className="mb-15" style={{ listStyle: 'disc', paddingLeft: 20 }}>
                        <li>Necessary Cookies – Enable site operation.</li>
                        <li>Performance Cookies – Track usage patterns.</li>
                        <li>Functionality Cookies – Remember preferences.</li>
                        <li>Advertising Cookies – Deliver relevant content (only with consent).</li>
                      </ul>
                      <p className="mb-10"><strong>3.3 Managing Cookies</strong></p>
                      <p className="mb-10">You can control cookies through browser settings, though this may affect site performance.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" onClick={() => toggle(4)}>
                    <button className={`accordion-button ${open === 4 ? 'collapsed' : ''}`} type="button">
                      4. Website Disclaimer
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${open === 4 ? 'show' : ''}`}>
                    <div className="accordion-body">
                      <p className="mb-10"><strong>4.1 No Advice</strong></p>
                      <p className="mb-15">This website does not constitute financial advice or a solicitation to buy/sell investments.</p>
                      <p className="mb-10"><strong>4.2 Risks</strong></p>
                      <p className="mb-15">All investments involve risk. Past performance is not indicative of future results.</p>
                      <p className="mb-10"><strong>4.3 Accuracy</strong></p>
                      <p className="mb-15">While we strive for accuracy, we do not guarantee completeness or error-free content.</p>
                      <p className="mb-10"><strong>4.4 Limitation of Liability</strong></p>
                      <p className="mb-10">We disclaim liability for losses arising from reliance on this website, except as required by law.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="s-title style-2 mb-10">5. Contact Us</p>
              {/* Reuse Contact page content (excluding the map) */}
              <Section1 />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tf-sidebar">
              <div className="sb-item sb-contact mb-30">
                <div className="sb-content">
                  <p className="s-title style-2 mb-30 text-anime-wave">
                    Need Clarification?
                    <br />
                    <span>Contact Legal Team</span>
                  </p>
                  <form action="#" className="form-contact bg-transparent style-3">
                    <div className="cols mb-10">
                      <fieldset>
                        <input type="text" placeholder="Full Name" required />
                      </fieldset>
                    </div>
                    <div className="cols mb-10">
                      <fieldset>
                        <input type="email" placeholder="Email" required />
                      </fieldset>
                    </div>
                    <div className="cols mb-10">
                      <fieldset>
                        <textarea className="h-100px" placeholder="Your question" />
                      </fieldset>
                    </div>
                    <button type="submit" className="tf-btn full text-anime-style-1">
                      Send Message
                      <i className="icon-chevron-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

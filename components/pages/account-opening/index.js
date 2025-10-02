import React from 'react'
import Image from "next/image";
import Link from "next/link";

const AccountOpening = () => {
    return (
        <section className="s-service-4 tf-spacing-1">
            <div className="tf-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading mb-70">
                            <p className="s-sub-title mb-15 justify-center">
                                <i className="icon-angles-right moveLeftToRight" />
                               open an account with us
                            </p>
                            <p className="s-title text-center text-anime-wave">
                                At B&B Wealth,
                                <span> you can choose from the two account opening options below:</span>
                            </p>
                        </div>
                        <div className="account-open-grid">
                            <Link href="/open-account/individual" className="account-open-card">
                                <div className="account-open-card__body">
                                    <span className="account-open-card__tag">Personal</span>
                                    <h3 className="account-open-card__title">Open an Individual Account</h3>
                                    <p className="account-open-card__text">
                                        Submit your details online and get started with wealth solutions tailored to you.
                                    </p>
                                </div>
                                <span className="account-open-card__cta">Start Individual Application <i className="icon-chevron-right" /></span>
                            </Link>
                            <Link href="/open-account/corporate" className="account-open-card">
                                <div className="account-open-card__body">
                                    <span className="account-open-card__tag">Business</span>
                                    <h3 className="account-open-card__title">Open a Corporate Account</h3>
                                    <p className="account-open-card__text">
                                        Provide company information to unlock professional portfolio management for your team.
                                    </p>
                                </div>
                                <span className="account-open-card__cta">Start Corporate Application <i className="icon-chevron-right" /></span>
                            </Link>
                        </div>
                        <div className="account-open-downloads">
                            <p className="account-open-downloads__title">Prefer the paper forms?</p>
                            <div className="account-open-downloads__links">
                                <a download href="/files/Individual_Account_Opening_Form.pdf">Download Individual Account Form</a>
                                <a download href="/files/Corporate_Account_Opening_Form.pdf">Download Corporate Account Form</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountOpening;

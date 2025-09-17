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
                            <ul className='text-center' style={{marginTop: "50px", display: "flex", justifyContent: "center", gap: "20px", flexDirection: "column", fontSize: "18px", fontWeight: "500"}}>
                                <li style={{textDecoration: "underline"}}><a download href="/files/Individual_Account_Opening_Form.pdf" style={{color: "#2e3192;"}}>&#128073; Download Individual Account Form</a></li>
                                <li style={{textDecoration: "underline"}}><a download href="/files/Corporate_Account_Opening_Form.pdf" style={{color: "#2e3192;"}}>&#128073; Download Corporate Account Form</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountOpening;
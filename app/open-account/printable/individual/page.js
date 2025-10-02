"use client";
import Layout from "@/components/layout/Layout";

export default function Page() {
  const print = () => window.print();
  return (
    <Layout breadcrumbTitle="Printable Form (Individual)">
      <section className="pt-40 pb-60">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="mb-20" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h3>Individual Account Opening Form</h3>
                <button className="tf-btn style-9" onClick={print}>Print / Save as PDF</button>
              </div>
              <div className="box-border p-20">
                <h5>Banking Details</h5>
                <p>Bank Name: _____________________________</p>
                <p>Account Name: __________________________</p>
                <p>Account No.: ___________________________</p>
                <p>BVN: _________________________________</p>
                <p>Account Type: ☐ Savings  ☐ Current</p>

                <h5 className="mt-20">Next of Kin</h5>
                <p>First Name: ____________________________</p>
                <p>Surname: ______________________________</p>
                <p>Other Name: ___________________________</p>
                <p>DOB: ____ / ____ / ______</p>
                <p>Gender: ☐ Male  ☐ Female</p>
                <p>Relationship: __________________________</p>
                <p>Mobile No.: ____________________________</p>
                <p>Email: _________________________________</p>
                <p>Contact Address: _______________________</p>

                <h5 className="mt-20">Investment Preferences</h5>
                <p>Management Mode: ☐ Discretionary  ☐ Non-Discretionary</p>
                <p>Mode of Investment: ☐ Cash  ☐ Equities</p>
                <p>Cash Amount (₦): _______________________</p>
                <p>Equities Worth (₦): _____________________</p>
                <p>Objective: ______________________________</p>
                <p>Time Horizon: __________________________</p>
                <p>Liquidity/Income requirement: ___________</p>

                <div className="mt-30">
                  <p>Signature: __________________  Date: ____ / ____ / ______</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


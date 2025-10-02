"use client";
import Layout from "@/components/layout/Layout";

export default function Page() {
  const print = () => window.print();
  return (
    <Layout breadcrumbTitle="Printable Form (Corporate)">
      <section className="pt-40 pb-60">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="mb-20" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h3>Corporate Account Opening Form</h3>
                <button className="tf-btn style-9" onClick={print}>Print / Save as PDF</button>
              </div>
              <div className="box-border p-20">
                <h5>Company Details</h5>
                <p>Registered Company Name: ________________</p>
                <p>RC/BN Number: _________________________</p>
                <p>Registered Address: ______________________</p>
                <p>Company Email: _________________________</p>
                <p>Company Phone: ________________________</p>

                <h5 className="mt-20">Account Details</h5>
                <p>Account Name: __________________________</p>
                <p>BVN: _________________________________</p>
                <p>Account Type: ☐ Savings  ☐ Current</p>

                <h5 className="mt-20">Authorized Signatories</h5>
                <p>1) Name: __________________  Designation: __________ Class: ☐ A ☐ B</p>
                <p>   DOB: ____/____/______  Email: __________________  Mobile: ______________</p>
                <p>   Address: ___________________________________________________________</p>
                <p>   IDs: ☐ Drivers Licence ☐ Passport ☐ National ID ☐ PVC ☐ Utility Bill</p>
                <p>2) Name: __________________  Designation: __________ Class: ☐ A ☐ B</p>
                <p>   DOB: ____/____/______  Email: __________________  Mobile: ______________</p>
                <p>   Address: ___________________________________________________________</p>
                <p>   IDs: ☐ Drivers Licence ☐ Passport ☐ National ID ☐ PVC ☐ Utility Bill</p>

                <h5 className="mt-20">Investment Preferences</h5>
                <p>Management Mode: ☐ Discretionary  ☐ Non-Discretionary</p>
                <p>Mode of Investment: ☐ Cash  ☐ Equities</p>
                <p>Cash Amount (₦): _______________________</p>
                <p>Equities Worth (₦): _____________________</p>
                <p>Objective: ______________________________</p>
                <p>Time Horizon: __________________________</p>
                <p>Liquidity/Income requirement: ___________</p>

                <div className="mt-30">
                  <p>Authorized Signature/Seal: __________________  Date: ____ / ____ / ______</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


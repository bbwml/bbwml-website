import Layout from "@/components/layout/Layout";
import CorporateForm from "@/components/pages/openAccount/CorporateForm";

export const metadata = { title: "Open Account – Corporate" };

export default function Page() {
  return (
    <Layout breadcrumbTitle="Open Account (Corporate)">
      <CorporateForm />
    </Layout>
  );
}


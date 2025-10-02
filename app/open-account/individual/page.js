import Layout from "@/components/layout/Layout";
import IndividualForm from "@/components/pages/openAccount/IndividualForm";

export const metadata = { title: "Open Account – Individual" };

export default function Page() {
  return (
    <Layout breadcrumbTitle="Open Account (Individual)">
      <IndividualForm />
    </Layout>
  );
}


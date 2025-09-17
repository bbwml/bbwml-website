import Layout from "@/components/layout/Layout";
import AccountOpening from "@/components/pages/account-opening";
export default function Home() {
  return (
    <>
      <Layout breadcrumbTitle="Account Opening" mainCls="padding-0">
        <AccountOpening />
      </Layout>
    </>
  );
}

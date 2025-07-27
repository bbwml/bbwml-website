
import Layout from "@/components/layout/Layout"
import PricingTable from "@/components/pages/pricingTable"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Pricing Plan">
				<PricingTable />
			</Layout>
		</>
	)
}
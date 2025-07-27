
import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/pages/serviceDetails"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={2}>
				<ServiceDetails />
			</Layout>
		</>
	)
}
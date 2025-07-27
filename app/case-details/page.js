
import Layout from "@/components/layout/Layout"
import CaseDetails from "@/components/pages/caseDetails"
export default function Home() {

	return (
		<>
		<div>Hello</div>
			<Layout breadcrumbTitle="Case Details">
				<CaseDetails />
			</Layout>
		</>
	)
}
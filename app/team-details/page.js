
import Layout from "@/components/layout/Layout"
import TeamDetails from "@/components/pages/teamDetails"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Team Details">
				<TeamDetails />
			</Layout>
		</>
	)
}
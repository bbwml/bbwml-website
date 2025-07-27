
import Layout from "@/components/layout/Layout"
import Error404 from "@/components/pages/error404"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="title">
				<Error404 />
			</Layout>
		</>
	)
}
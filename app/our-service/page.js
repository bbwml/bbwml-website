
import Layout from "@/components/layout/Layout"
import OurService from "@/components/pages/ourService"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Our Services" mainCls="tf-spacing-10">
				<OurService />
			</Layout>
		</>
	)
}

import Layout from "@/components/layout/Layout"
import Home4 from "@/components/pages/home4"
export default function Home() {

	return (
		<>
			<Layout headerStyle={4} footerStyle={4} hero={4} mainCls="padding-0">
				<Home4 />
			</Layout>
		</>
	)
}
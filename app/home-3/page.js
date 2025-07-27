
import Layout from "@/components/layout/Layout"
import Home3 from "@/components/pages/home3"
export default function Home() {

	return (
		<>
			<Layout headerStyle={3} footerStyle={3} hero={3} mainCls="style-3">
				<Home3 />
			</Layout>
		</>
	)
}
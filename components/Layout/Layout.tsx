import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Footer01, Header, Search01 } from "../Components";
import { Footer } from "../Components/Footer";

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
}

export const Layout: FC<Props> = ({
	title,
	children,
	pageDescription,
	imageFullUrl
}) => {
	const router = useRouter()
  const { pathname } = router
  const p = pathname.substring(1).split('/')
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="keywords" />
				<meta name="description" content={pageDescription} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:type" content="og:product" />
				{imageFullUrl && <meta property="og:image" content={imageFullUrl} />}
				<meta property="product:price:currency" content="USD" />
				<meta property="product:price:amount" content="25" />
			</Head>
			<Header />
			<Search01 />
			<main>{children}</main>
			{ p[0] === 'admin'
        ? null
				: 
				<>
					<Footer />
					{/* <Footer01 /> */}
				</>
			}
			</>
	);
};

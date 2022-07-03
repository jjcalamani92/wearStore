import type { NextPage } from "next";
import { FC, useContext } from "react";
import { Feature } from "../../components/Components/Feature";
import { GridFeatured } from "../../components/Components/GridFeatured";
import { Contact, Home, Layout } from "../../components/Layout";
import { UiContext } from "../../src/context";
import { GetStaticProps } from 'next';
import { graphQLClientS } from "../../src/graphQLClient";
import { SBF } from "../../src/gql";
import { Category, Featured } from "../../src/interfaces";

interface Props {
	featured: Featured[]
}

const Index:FC<Props> = ({featured}) => {
	const { site } = useContext(UiContext)
	return (
		<Layout
			title={site.title}
			pageDescription={site.description}
			imageFullUrl={site.logo}
		>
			<Feature />
			<GridFeatured data={featured}/>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = await graphQLClientS.request(SBF, {id: process.env.API_SITE})
	const featured = data.site.categories.reduce((allFeatured: Featured[], category:Category) => {
		return [...allFeatured, ...category.featured]
	}, [])
	return {
		props: { 
			
			featured
		},
		revalidate: 86400000
	};
};

export default Index;

import { FC, useState } from "react";
import { Layout, LayoutAdmin } from "../../../components/Layout";
import { graphQLClientS } from "../../../src/graphQLClient";
import { S } from "../../../src/gql";
import { GetStaticProps, GetServerSideProps } from 'next';
import { Category, ISeo, Item, Section, Site } from "../../../src/interfaces";
import { HeadingTable, LayoutCategoryListAdmin, FormSite, GridPages } from "../../../components/Components";
import { TableCategory } from "../../../components/Components/table/TableCategory";
import { FilterSite } from '../../../components/filterSite';
import { HeadingDashboard } from "../../../components";
import { useRouter } from "next/router";


interface Props {
  seo: ISeo
	site: Site
}
const AdminPages:FC<Props> = ({seo, site}) => {

	return (
		<>
			<Layout
			title={site.title}
			pageDescription={site.description}
			imageFullUrl={site.logo}
		>	
				<HeadingDashboard title="Sitio" />
				<FilterSite data={site.categories}/>
				<HeadingTable title='Categorias' href="/admin/sites/new"/>
				<TableCategory categories={site.categories} />
				
				{/* <GridPages data={site.categories}/> */}
				<LayoutCategoryListAdmin data={site.categories}/>

				<HeadingTable title='Actualizar datos del Sitio'/>
				<FormSite site={site} />
				</Layout>
		</>
	);
};

export const getServerSideProps:GetServerSideProps = async() => {
  const { site } = await graphQLClientS.request(S, {id: process.env.API_SITE})
	return {
		props: {
			site
		},
	};
}
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { site } = await graphQLClientS.request(S, {id: process.env.API_SITE})
//   return {
//     props: {
//       site
//     },
//     revalidate: 3
//   };
// };

export default AdminPages;

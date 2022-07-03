import { FC, useContext, useState } from "react";
import Link from 'next/link';
import { Layout, } from "../../../components/Layout";
import { graphQLClientP } from "../../../src/graphQLClient";
import { GetServerSideProps, GetStaticProps } from "next";
import { Category, IMark, ISeo, Item, Section, Site } from "../../../src/interfaces";
import { HeadingTable, LayoutMarkListAdmin, TableMark } from "../../../components/Components";
import { MARKS } from "../../../src/gql";
import { UiContext } from "../../../src/context";


interface Props {
  seo: ISeo
	markAll: IMark[]
}
const AdminPages:FC<Props> = ({seo, markAll}) => {
	const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)

	return (
		<>
		<Layout
			title={site.title}
			pageDescription={site.description}
			imageFullUrl={site.logo}
		>
			<HeadingTable title='Marcas' href="/admin/marks/new"/>
			
			<TableMark markAll={markAll} />
      <LayoutMarkListAdmin marks={markAll} /> 
		</Layout>
		</>
	);
};

export const getServerSideProps:GetServerSideProps = async() => {
  const { markAll } = await graphQLClientP.request(MARKS, {site: process.env.API_SITE})
	return {
		props: {
			markAll
		},
	};
}
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { markAll } = await graphQLClientP.request(MARKS, {site: process.env.API_SITE, fetchPolicy: 'network-only', onCompleted: () => console.log('called'),})
//   // const { site } = await graphQLClientS.request(S, {id: process.env.API_SITE})
//   // console.log( markAll )
//   return {
//     props: {
//       markAll
//     },
//     revalidate: 10
//   };
// };

export default AdminPages;

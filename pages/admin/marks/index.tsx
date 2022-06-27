import { FC, useState } from "react";
import Link from 'next/link';
import { LayoutAdmin } from "../../../components/Layout";
import { graphQLClientP, graphQLClientS } from "../../../src/graphQLClient";
import { S } from "../../../src/gql/siteQuery";
import { GetServerSideProps, GetStaticProps } from "next";
import { Category, IMark, ISeo, Item, Section, Site } from "../../../src/interfaces";
import { FormSite } from "../../../components/Layout/admin/FormSite";
import { LayoutCategoryListAdmin, LayoutMarkListAdmin, Spinner04 } from "../../../components/Components";
import { TableCategory } from "../../../components/Components/table/TableCategory";
import { MARKS } from "../../../src/gql/markQuery";
import { TableMark } from "../../../components/Components/table/TableMark";
import { useQuery } from "@apollo/client";


interface Props {
  seo: ISeo
	markAll: IMark[]
}
const AdminPages:FC<Props> = ({seo, markAll}) => {
  // console.log(markAll)
//   const { loading, error, data, fetchMore } = useQuery(MARKS, {
// 		variables: { site: process.env.API_SITE },  
// 		fetchPolicy: 'network-only',
// 		onCompleted: () => console.log('called'),
// });
// if (loading) return <Spinner04 />;
  // console.log(data)
	return (
		<>
			<LayoutAdmin>
        <TableMark markAll={markAll} />
        <LayoutMarkListAdmin marks={markAll} /> 
			</LayoutAdmin>
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

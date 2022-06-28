import { FC, useContext, useState } from "react";
import { PRODUCTS, PRODUCT_ALL } from '../../src/gql/query';
import request, { RequestDocument } from "graphql-request";
import Link from 'next/link';
import { Spinner04, TableProduct, Pagination01, LayoutItemListAdmin, Pagination } from "../../components/Components";
import { Layout, LayoutAdmin } from "../../components/Layout";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import { graphQLClientP } from "../../src/graphQLClient";
import { IClothing } from "../../src/interfaces";
import { UiContext } from "../../src/context";

interface Props {
	clothingAll: IClothing[]
	clothingsAll: IClothing[]
}

const PAGE_SIZE = 6;

const AdminPage:FC<Props> = ({clothingAll, clothingsAll}) => {
	const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)

  const [page, setPage] = useState(0)

	const { loading, error, data, fetchMore } = useQuery(PRODUCT_ALL, {
		variables: { limit: PAGE_SIZE, offset: page*PAGE_SIZE, site: process.env.API_SITE },  
		fetchPolicy: 'network-only',
		onCompleted: () => console.log('called'),
});
	if (loading) return <Spinner04 />;
	return (
		<>
		<Layout
			title={site.title}
			pageDescription={site.description}
			imageFullUrl={site.logo}
		>
				<TableProduct products={data.clothingsAll} />
				<LayoutItemListAdmin products={data.clothingsAll}/>
				<Pagination01 setPage={setPage} page={page} length={data.clothingsAll.length} all={PAGE_SIZE} />
			{/* <LayoutAdmin>
				{/* <Pagination  /> */}
			{/* </LayoutAdmin> */} 
		</Layout>
		</>

	);
};

// export const getServerSideProps:GetServerSideProps = async({query}) => {
// 	const { page, limit }:any = query;
// 	console.log(page, limit)
//   const { clothingAll } = await graphQLClientP.request(PRODUCTS, {site: process.env.API_SITE})
//   const {clothingsAll} = await graphQLClientP.request(PRODUCT_ALL, { limit: Number(limit), offset: Number(page)*Number(limit), site: process.env.API_SITE })
//   // const data = await graphQLClientP.request(PRODUCTS, {site: process.env.API_SITE})
// 	// console.log('data', clothingsAll)
// 	console.log(clothingsAll)
// 	return {
// 		props: {
// 			clothingAll,
// 			clothingsAll
// 		},
// 	};
// }

export default AdminPage;

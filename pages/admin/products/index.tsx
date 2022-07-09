import { FC, useContext, useEffect, useState } from "react";
import Link from 'next/link';
import { Layout, } from "../../../components/Layout";
import { graphQLClientP } from "../../../src/graphQLClient";
import { GetServerSideProps, GetStaticProps } from "next";
import { Category, IMark, ISeo, Item, Section, Site } from "../../../src/interfaces";
import { HeadingTable, LayoutMarkListAdmin, Spinner04, TableMark } from "../../../components/Components";
import { MARKS } from "../../../src/gql";
import { UiContext } from "../../../src/context";
import { Wear } from "../../../src/interfaces/Wear";
import { CategoryFilters } from "../../../components/categoryFilters";
import { useQuery } from "@apollo/client";
import { PRODUCTS_PAGINATION } from "../../../src/gql/wear";
import { Pagination } from "../../../components";


interface Props {
  seo: ISeo
	products: Wear[]
}
const AdminProduct:FC<Props> = ({seo, products}) => {
	console.log(products)
	const [page, setPage] = useState(15)
	const [first, setFirst] = useState<number | null>(page)
	const [last, setLast] = useState<number | null>(null)
	const [before, setBefore] = useState(null)
	const [after, setAfter] = useState(null)

	useEffect(() => {
		setBefore(data?.listWearsWithCursor.page.pageInfo.startCursor)
		setAfter(data?.listWearsWithCursor.page.pageInfo.endCursor)
		
	}, [])
	
	const { loading, error, data, fetchMore } = useQuery(PRODUCTS_PAGINATION, {
		variables: { args: { last: last, first: first, before:before, after: after }, site: process.env.API_SITE },
		fetchPolicy: 'network-only',
		onCompleted: () => console.log('called'),
	});


	// console.log(data)
	// console.log(data?.listWearsWithCursor.page.edges)
	// console.log(data?.listWearsWithCursor.pageData)
	let start = Buffer.from( `${data?.listWearsWithCursor.page.pageInfo.endCursor}`, 'base64').toString('ascii')
	let end = Buffer.from( `${data?.listWearsWithCursor.page.pageInfo.startCursor}`, 'base64').toString('ascii')
	let pageData= data?.listWearsWithCursor.pageData
	// console.log('after',  Buffer.from( `${data?.listWearsWithCursor.page.pageInfo.endCursor}`, 'base64').toString('ascii'))
	// console.log('before',  Buffer.from( `${data?.listWearsWithCursor.page.pageInfo.startCursor}`, 'base64').toString('ascii'))
	const prev = () => {
		setBefore(data?.listWearsWithCursor.page.pageInfo.startCursor)
		setLast(page)
		setAfter(null)
		setFirst(null)
	}
	const next = () => {
		setBefore(null)
		setLast(null)
		setAfter(data?.listWearsWithCursor.page.pageInfo.endCursor)
		setFirst(page)
	}
	return (
		<>
		<Layout
			title="{site.title}"
			pageDescription="{site.description}"
			imageFullUrl="{site.logo}"
		>
      <CategoryFilters edges = {data?.listWearsWithCursor.page.edges} loading={loading}/>
			<Pagination next={next} prev={prev} start={start} end={end} pageData={pageData}/>
			{/* <HeadingTable title='Marcas' href="/admin/marks/new"/>
			
			<TableMark markAll={markAll} />
      <LayoutMarkListAdmin marks={markAll} />  */}
		</Layout>
		</>
	);
};

export const getServerSideProps:GetServerSideProps = async() => {
  // const { markAll } = await graphQLClientP.request(MARKS, {site: process.env.API_SITE})
	return {
		props: {
			products:[]
		},
	};
}

export default AdminProduct;

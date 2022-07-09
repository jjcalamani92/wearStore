import { FC, Key, ReactChild, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react";
import { PRODUCT_ALL } from '../../src/gql';
import { Spinner04, TableProduct, Pagination01, LayoutItemListAdmin, HeadingTable } from "../../components/Components";
import { Layout } from "../../components/Layout";
import { useQuery } from "@apollo/client";
import { UiContext } from "../../src/context";
import { PRODUCTS_PAGINATION } from "../../src/gql/wear";

const PAGE_SIZE = 8;

const AdminPage = () => {
	const { site } = useContext(UiContext)
	const [page, setPage] = useState(5)
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
	if (loading) return <Spinner04 />;

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
				title={site.title}
				pageDescription={site.description}
			// imageFullUrl={site.logo}
			>
				{
					data?.listWearsWithCursor.page.edges.map((d:any) =>
					(<h1 key={d.node._id}>{d.node.article.title}</h1>
					))
				}
				<Pagination next={next} prev={prev} start={start} end={end} pageData={pageData}/>
				{/* <HeadingTable title='Productos' href="/admin/products/new"/>
				<TableProduct products={data.clothingsAll} />
				{/* <GridProduct product={data.clothingsAll}/> */}
				{/* <LayoutItemListAdmin products={data.clothingsAll}/> */}
				{/* <Pagination01 setPage={setPage} page={page} length={data.clothingsAll.length} all={PAGE_SIZE} /> */}
				{/* <LayoutAdmin>
				{/*  */}
				{/* </LayoutAdmin> */}
			</Layout>
		</>

	);
};


export default AdminPage;

import { NextPage, GetServerSideProps } from 'next';
import { Category, Featured, IClothing, Section } from "../../../../../src/interfaces";
import { Layout, LayoutAdmin } from '../../../../../components/Layout';
import { graphQLClientS } from '../../../../../src/graphQLClient';
import { SBS } from '../../../../../src/gql/site';
import { FormFeatured, HeadingTable } from '../../../../../components/Components/';
import { HeadingAdmin } from '../../../../../components/Components/HeadingAdmin';
import { useRouter } from 'next/router';
import { UiContext } from '../../../../../src/context';
import { useContext } from 'react';
interface Props {
	featured: Featured;
	category: string
}
const ProductPage: NextPage<Props> = ({ featured, category }) => {
	const { site, toggleSideSearch, toggleSideCart } = useContext(UiContext)

	const router = useRouter()
	return (
		<>
			<Layout
			title={site.title}
			pageDescription={site.description}
		>
				<HeadingAdmin category={`${router.query.category}`}/>
				<HeadingTable 
						title={
							featured._id ? `Actualizar Destacado` : `Crear Destacado`
						} 
					/>
				<FormFeatured featured={featured} category={category}/>
			</Layout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { featured = '', category='' } = query
	let data: Featured | null | any
	if (featured === 'new') {
		data = {
			name: '',
			href: '',
			description: '',
			imageSrc: 'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg',
			imageAlt: ''
		}
	} else {
		const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
		const dat = site.categories.find((data: { href: string; }) => data.href === `${category}`)
		data = dat.featured.find((data: { href: string; }) => data.href === `${featured}`)
	}
	const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
	const res = site.categories.find((data: { href: string; }) => data.href === `${category}`)

	// const { site } = await graphQLClientS.request(SBS, { id: process.env.API_SITE })
	// const res = site.categories.find(findCategory)
	// function findCategory(res: Category) {
	// 	return res.href === `${category}`;
	// }
  // const re = res.featured.find(findFeatured)
	// function findFeatured(re:Featured){
	// 	return re.href === `${featured}`;
	// }
	return {
		props: {
			featured: data,
      category: res._id
		},
	};
}

export default ProductPage;
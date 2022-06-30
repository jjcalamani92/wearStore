import { GetStaticPaths, GetStaticProps } from "next";
import { Category,Section, IClothing, ISeo } from "../../../src/interfaces";
import React, { FC, useContext } from "react";
import { SECTION } from "../../../src/gql/query";
import { SBI } from "../../../src/gql/siteQuery";
import { Layout } from "../../../components/Layout";
import { CategoryPreviews01, HeadingPrimary, LayoutSectionList, GridProduct } from "../../../components/Components";
import { graphQLClientP, graphQLClientS } from '../../../src/graphQLClient';
import { UiContext } from "../../../src/context";

interface Props {
  seo: ISeo
  section: Section
}

const SectionPage:FC<Props> = ({seo, section}) => {
	const { site } = useContext(UiContext)
  return (
    <>
      <Layout
			  title={`${site.title} - ${seo.section.name}`}
        pageDescription={`${seo.section.description}`}
        imageFullUrl={seo.section.imageSrc}
      >
        <HeadingPrimary seo={seo} />
        <GridProduct data={section.items} />
        {/* <CategoryPreviews01 section={section.items} category={`${section.href}`}/> */}
			  {/* <LayoutSectionList products={section.items} /> */}
      </Layout>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { clothingAll } = await graphQLClientP.request(SECTION , {site: `${process.env.API_SITE}`})
  const paths = clothingAll.map((data:IClothing) => ({
    params: data
  }))
  return {
    paths,
    fallback: "blocking"
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category="", section = "" } = params as { section: string, category: string };

  const { site } = await graphQLClientS.request(SBI, {id: process.env.API_SITE})
	const res = site.categories.find(findCategory)
	function findCategory(res:Category){
		return res.href === `${category}`;
	}
  const re = res.sections.find(findSection)
	function findSection(re:Section){
		return re.href === `${section}`;
	}
  return {
    props: { 
      section: re, 
      seo: {
        category: {
          name: res.name,
          href: res.href
        },
        section: {
          name: re.name,
          href: re.href,
          description: re.description,
          imageSrc: re.imageSrc
        },
      },
    },
    revalidate: 10
  };
};

export default SectionPage;




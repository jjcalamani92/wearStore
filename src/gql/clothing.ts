import { gql } from "@apollo/client";

export const PRODUCT_FRAGMENT = gql`
  fragment productDetails on Clothing {
    _id
    name
    brand
    description
    image
    inStock
    slug
    category
    section
    item
    price
		oldPrice
    tags
    featured

    color
    sizes
  }
`;

export const PBS = gql`
  query ClothingAll($site: String!) {
    clothingAll(site: $site) {
      slug
    }
  }
`;

export const CATEGORY = gql`
  query ClothingAll($site: String!) {
    clothingAll(site: $site) {
      category
    }
  }
`;
export const SECTION = gql`
  query ClothingAll($site: String!) {
    clothingAll(site: $site) {
      category
      section
    }
  }
`;
export const ITEM = gql`
  query ClothingAll($site: String!) {
    clothingAll(site: $site) {
      category
      section
      item
    }
  }
`;

export const PRODUCTS_BY_ITEM = gql`
  query ClothingByCategoryAndSectionAndItem(
    $category: String!
    $section: String!
    $item: String!
    $site: String!
  ) {
    clothingByCategoryAndSectionAndItem(
      category: $category
      section: $section
      item: $item
      site: $site
    ) {
      name
      price
      oldPrice
      featured
      image
      slug
    }
  }
`;
export const PRODUCTS_BY_SECTION = gql`
  query ClothingByCategoryAndSectionAndItem(
    $category: String!
    $section: String!
    $item: String!
    $site: String!
  ) {
    clothingByCategoryAndSectionAndItem(
      category: $category
      section: $section
      item: $item
      site: $site
    ) {
      name
      price
      image
      slug
    }
  }
`;






export const PRODUCT_BY_FEATURED = gql`
  query ClothingByFeatured($featured: String!, $site: String!) {
    clothingByFeatured(featured: $featured, site: $site) {
      ...productDetails
    }
  }
	${PRODUCT_FRAGMENT}
`;

export const PRODUCT_BY_SLUG = gql`
  query ClothingBySlug($slug: String!, $site: String!) {
    clothingBySlug(slug: $slug, site: $site) {
			...productDetails
    }
  }
	${PRODUCT_FRAGMENT}
`;

export const PRODUCT_ALL = gql`
  query ClothingsAll($limit: Float!, $offset: Float!, $site: String!) {
    clothingsAll(input: { limit: $limit, offset: $offset }, site: $site) {
      ...productDetails
    }
  }
	${PRODUCT_FRAGMENT}
`;


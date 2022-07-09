export interface IClothing {
	_id: string;
	name: string;
	brand: string;
	image: string[];
	description: string;
	inStock: number;
	slug: string;
	category: string;
	section: string;
	item: string;
	price: number;
	oldPrice: number;
	tags: string[];
	client: string;
	status: boolean;
	site: string;
	featured: string;
	
	color: string;
	sizes: string[];
}
export interface IMark {
	_id: string;
	name: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
	description: string;
	}
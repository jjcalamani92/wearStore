import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Category, Featured, Item, Section } from "../src/interfaces";
import { Article } from "../src/interfaces/Wear";
import { Spinner04 } from "./Components";

interface Main {
  children: React.ReactNode;
}

export const Main: FC<Main> = ({ children }) => {
  return (
    <div className="bg-white mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  )
}
interface Button {
  name: string;
}
export const Button: FC<Button> = ({ name }) => {
  return (
    <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
      {name}
    </button>

  )
}

interface HeadingPrimary {
  title: string;
}

export const HeadingPrimary: FC<HeadingPrimary> = ({ title }) => {
  return (
    <Main>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-7xl text-center font-bold text-gray-800 leading-normal">{title}</h1>
      </div>
    </Main>
  )
}

interface Card {
  article: Article;
}

export const Card: FC<Card> = ({ article }) => {
  const { title, slug } = article
  return (
    <Link href={`${slug}`} className="group-hover:opacity-75">

      <a>
        <div className="w-full bg-white rounded-lg overflow-hidden   leading-none relative">
          <Image
            src={'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg'}
            alt={"imageAlt"}
            width={170}
            height={170}
            objectFit='cover'
          />

        </div>
        <h3 className={`mt-1 overflow-ellipsis whitespace-nowrap overflow-hidden text-xs md:text-sm font-semibold text-gray-900`}>
          {title}

        </h3>

      </a>

    </Link>
  )
}

interface CardSite {
  data: Category | Section | Featured | Item;
}

export const CardSite: FC<CardSite> = ({ data }) => {
  const { imageSrc, name, href} = data
  return (
    <Link href={`/admin/sites/${href}`} className="group">
      <a>
        <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none leading-none">
          <Image
            src={imageSrc}
            alt={name}
            width={300}
            height={300}
            objectFit={'cover'}
          />

        </div>
        <div className="mt-2 flex justify-between">
          <div>
            <h3 className="text-xs md:text-sm text-gray-700">

              {name}
            </h3>
            {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
          </div>
          {/* <p className="text-sm font-medium text-gray-900">
									{product.price}.00 Bs
								</p> */}
        </div>
      </a>
    </Link>

  )
}
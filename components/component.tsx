import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Category, Featured, Item, Section } from "../src/interfaces";
import { Article } from "../src/interfaces/Wear";
import { Spinner04 } from "./Components";
import { Text } from "./Practice/Practice";

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
  children: React.ReactNode;
  name: string;
  click: () => void
}
export const Button: FC<Button> = ({ name, children }) => {
  return (
    <button className="w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600" onClick={() => click()}>
      {name}
    </button>

  )
}
export const Button1: FC<Button> = ({ name, children }) => {
  return (
    <Text as="button" className="w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">eliminar</Text>    

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
        <div className="w-full bg-white rounded-lg overflow-hidden  leading-none ">
          <Image
            src={'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg'}
            alt={"imageAlt"}
            width={170}
            height={170}
            objectFit='cover'
          />

        </div>
        <h3 className={`py-1 overflow-ellipsis whitespace-nowrap overflow-hidden text-xs md:text-sm font-semibold text-gray-900`}>
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
  console.log(data)
  return (
    <div>
    <Link href={`/admin/sites/${href}`} className="group">
      <a>
      <div className="w-full bg-white rounded-lg overflow-hidden leading-none">
          <Image
            src={imageSrc}
            alt={name}
            width={300}
            height={300}
            objectFit={'cover'}
          />

        </div>
        <div className="py-2 flex justify-between">
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
    {/* <Button name='eliminar' onClick={() => onDeleteData(d._id)}/>  */}
           
    </div>
  )
}
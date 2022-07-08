import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Article } from "../src/interfaces/Wear";

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
              width={500}
              height={500}
              objectFit='cover'
            />
          {/* {
              oldPrice
              ?
              <span className="absolute left-0 top-2 text-xs md:text-sm  text-red-500 bg-gray-100 p-1"> -{`${Math.floor((Number(price)-Number(oldPrice))*100/Number(price))}`}%</span>
              : null
            } */}
          {/* {
              oldPrice
              ? 
              <>
                <span className="absolute right-0 top-2  ">
                  <p className="hidden lg:block text-xs md:text-sm bg-red-500 text-white p-1 font-semibold"> en oferta </p>
                  <div className="lg:hidden">
                    <Image
                      src={"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1656784000/etiqueta_vlolbd.png"}
                      alt="oferta"
                      width={20}
                      height={20}
                    />
                  </div>
                </span>
                
              </>
              : null
            } */}
        </div>
        <h3 className={`mt-1 overflow-ellipsis whitespace-nowrap overflow-hidden text-xs md:text-sm font-semibold text-gray-900`}>
          {title}

        </h3>

      </a>
    </Link>
  )
}
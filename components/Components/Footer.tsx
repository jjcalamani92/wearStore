import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { UiContext } from "../../src/context"

export const Footer = () => {
  const { site } = useContext(UiContext)

  return (
    <>
      <div className="bg-white mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6`}
            >
              <ul>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/contacto">
                    <a className="text-xs lg:text-sm leading-none hover:text-brand  text-gray-800 ">Contacto</a>
                  </Link>
                </li>
              </ul>

            </div>
            <div className="py-16 flex flex-col justify-center items-center">
              <Link href="/" className=''>
                  <a className='flex items-center'>
                    <Image
                      width={250}
                      height={100}
                      src={site.logo}
                      objectFit={'contain'}
                      alt=""
                    />
                  </a>
                </Link>
              
              <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 ">2022 {site.title}. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
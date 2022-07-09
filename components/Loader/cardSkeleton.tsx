import Image from 'next/image'
import React from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import Skeleton from 'react-loading-skeleton'


export const CardSkeleton= () => {
  return (
    <div >
      
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
              {<Skeleton/>}

            </h3>

          </a>
      
    </div>
  )
}
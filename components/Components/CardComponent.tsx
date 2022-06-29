import Image from "next/image"
import Link from "next/link";
import { FC } from "react"

interface CardComponent {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  width:number;
  height: number;
  objectFit: any;

  price?: number;
}
export const CardComponent: FC<CardComponent> = ({name, imageSrc, imageAlt, description, width ,height , objectFit, href, price}) => {
  return (
              <Link href={href} className="group-hover:opacity-75">
                <a>
                <div className="w-full bg-white rounded-lg overflow-hidden   leading-none">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={width}
                    height={height}
                    objectFit={objectFit}
                  />
                </div>
                <h3 className="mt-1 text-base font-semibold text-gray-900">
                    {name}
                    {
                      price 
                      ?
                      <p className="mt-1 text-sm  text-gray-500">{price}.00 Bs</p>
                      : null
                    }
                </h3>
                <p className="mt-1 text-sm  text-gray-500">{description}</p>
                </a>
              </Link>
  )
}
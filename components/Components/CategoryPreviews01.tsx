import Image from "next/image"
import { FC } from "react"
import { Section } from "../../src/interfaces"
import { CardComponent } from "./CardComponent"

interface CategoryPreviews01 {
  section: Section[]
  category: string
}

export const CategoryPreviews01: FC<CategoryPreviews01> = ({section, category}) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* <h2 className="text-2xl font-extrabold text-gray-900">Secciones</h2> */}

          <div 
          className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3"
          // className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6"
          >
            {section.map((data,i) => (
              <CardComponent 
                key={i}
                name={data.name} 
                imageSrc={data.imageSrc} 
                imageAlt={data.imageAlt} 
                description={data.description} 
                width={500}
                height={600} 
                objectFit='cover'
                href={`/${category}/${data.href}`}
              />
              // <div key={i} className="group relative">
              //   <div className="relative w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              //     <Image
              //       src={data.imageSrc}
              //       alt={data.name}
              //       width={500}
              //       height={600}
              //       objectFit='cover'
              //     />
              //   </div>
              //   <h3 className="mt-6 text-sm text-gray-500 capitalize">
              //     <a href={`/${category}/${data.href}`}>
              //       <span className="absolute inset-0" />
              //       {data.name}
              //     </a>
              //   </h3>
              //   <p className="text-base font-semibold text-gray-900 capitalize">{data.description}</p>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

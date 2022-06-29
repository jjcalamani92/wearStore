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
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div 
          className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { FC, Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import { Card, Main, CardSite } from './component'
import { GridProduct } from './gridProduct'
import { Edges, Wear } from '../src/interfaces/Wear'
import { CardComponent } from './Components/CardProduct'
import { Spinner04 } from './Components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Section, Category, Featured, Item, IMark } from '../src/interfaces'
import { useRouter } from 'next/router'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
]
const filters = [
  {
    id: 'Secciones',
    name: 'Secciones',
    options: [
      { value: 'ropa', label: 'ropa', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Categorias',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'SubCategorias',
    options: [
      { value: '2l', label: '2L', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Items',
    options: [
      { value: '2l', label: '2L', checked: false },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface FilterSite {
  data: Category[] | Section[] | Featured[] | Item[] | IMark[];
}

export const FilterSite: FC<FilterSite> = ({ data }) => {
  const router = useRouter();
	const { pathname } = router
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  // const  { node } = edges
  const array = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5',]
  // console.log(edges);
  return (
    <Main>
      <section aria-labelledby="products-heading" className='my-3'>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8 gap-y-10 object-fill">
          {/* Filters */}
          {/* <form className=" hidden lg:flex flex-col object-fill">
            <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
              {subCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href}>{category.name}</a>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form> */}



          {/* Product grid */}
        </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 col-span-5 gap-6">
            {data.map((d, i) => (
              <CardSite url={pathname} data={d} key={i} />
            ))}
          </div>
      </section>
    </Main>
  )
}

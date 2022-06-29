import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";
import React, { FC, useState } from "react";
import { Category, Featured, IClothing, Section, Site } from "../../../src/interfaces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Swal from "sweetalert2";

interface Props {
  sections: Section[];
  category: string;
}


export const TableSection: FC<Props> = ({ sections, category }) => {
  const router = useRouter()

  const [show, setShow] = useState(null);

  const onDeleteData = async (id: string) => {
    const data = { section: id, category: category }
    Swal.fire({
      title: 'Está seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado!',
          text: 'La sección ha sido eliminado.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        }),
          // await axios.put(`${process.env.APIS_URL}/api/site/removecategory/${process.env.API_SITE}`, {category: id})
          await axios.put(`${process.env.APIS_URL}/api/site/removesection/${process.env.API_SITE}`, data)
        router.push(`/admin/sites/${router.query.category}`)

      }
    })

  }
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-2 sm:py-2 lg:py-2 lg:max-w-none">
            <div className="my-6 container mx-auto flex flex-row lg:flex-row items-center lg:items-center justify-between ">
              <h4 className="text-2xl font-bold leading-tight text-gray-800">Secciones</h4>
              <Link href={`/admin/sites/${router.query.category}/new`}>
                <a className="transition duration-150 ease-in-out hover:bg-red-600 focus:outline-none border bg-red-500 rounded text-white px-8 py-2 text-sm">Nueva Sección</a>
              </Link>
            </div>
            <div className="hidden lg:block container ">
              <div className="grid grid-cols-11 gap-2  border border-gray-100 rounded content-center px-2 py-5">
                <div className="col-span-1 items-center ">
                  <p className="text-base font-medium leading-none text-gray-900 mr-2 ">
                    Nombre
                  </p>
                </div>
                <div className="col-span-4 items-center ">
                  <p className="text-base font-medium leading-none text-gray-900 mr-2 ">
                    Descripción
                  </p>
                </div>
                <div className="items-center ">
                  <p className="text-base font-medium leading-none text-gray-900 mr-2 ">
                    Imagen
                  </p>
                </div>
                <div className="col-span-4 items-center ">
                  <p className="text-base font-medium leading-none text-gray-900 mr-2 ">
                    Descripción de la imagen
                  </p>
                </div>
                <div></div>
              </div>
              {
                sections.map((section, i) => (
                  <div className="grid grid-cols-11 gap-2 border border-gray-100 p-2 " key={i}>

                    <div className="col-span-1 flex items-center">
                      <p className="text-sm leading-none text-gray-600 ">
                        {section.name}
                      </p>
                    </div>
                    <div className="col-span-4 flex items-center">
                      <p className="text-sm leading-normal text-gray-600 ">
                        {section.description}

                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="rounded-lg bg-white overflow-hidden group-hover:opacity-75 leading-none">
                        <Image
                          src={section.imageSrc}
                          alt={section.name}
                          height={100}
                          width={100}
                          objectFit='cover'
                        // className="object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-4 flex items-center">
                      <p className="text-sm  leading-normal text-gray-600 ">
                        {section.imageAlt}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Link href={`/admin/sites/${router.query.category}/${section.href}`} >
                        <a>
                          <FontAwesomeIcon
                            className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
                            icon={faPenToSquare}
                          />
                        </a>
                      </Link>
                      <div onClick={() => onDeleteData(section._id)} >
                        <a>
                          <FontAwesomeIcon
                            className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
                            icon={faCircleMinus}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            {/* <div className="overflow-x-auto hidden lg:flex">
              <table className="table-auto  whitespace-nowrap w-full">
                <thead>
                  <tr className="h-16 border border-gray-100 rounded">
                    <th className="w-3/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Nombre de la Sección
                        </p>
                      </div>
                    </th>
                    <th className="w-3/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Descripción
                        </p>
                      </div>
                    </th>

                    <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Imagen
                        </p>
                      </div>
                    </th>
                    <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Descripción de la imagen
                        </p>
                      </div>
                    </th>
                    {/* <th className="w-1/10" >
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-900 mr-2">
                          Fecha de publicación
                        </p>
                      </div>
                    </th> 
                    <th className="w-1/10" ></th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((section, i) => (
                    <tr className="h-16  border border-gray-100 rounded" key={i}>
                      <td className="pl-15 mb-5">
                        <div className="flex items-center pl-5">
                          <p className="text-sm leading-none text-gray-600 mr-2">
                            {section.name}
                          </p>
                        </div>
                      </td>
                      <td className="pl-15 mb-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2 capitalize">
                            {section.description}
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <div className="flex items-center">
                          <div className="aspect-w-1 h-30 aspect-h-1 rounded-lg bg-white overflow-hidden group-hover:opacity-75">
                            <Image
                              src={section.imageSrc}
                              alt={section.name}
                              height={100}
                              width={100}
                              className="object-center object-cover"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            {section.imageAlt}
                          </p>
                        </div>
                      </td>
                      {/* <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2">
                            04/07
                          </p>
                        </div>
                      </td> 
                      <td className="pl-4">
                        <div className="flex items-center gap-2">
                          <Link href={`/admin/sites/${router.query.category}/${section.href}`} >
                            <a>
                              <FontAwesomeIcon
                                className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
                                icon={faPenToSquare}
                              />
                            </a>
                          </Link>
                          <div onClick={() => onDeleteData(section._id)} >
                            <a>
                              <FontAwesomeIcon
                                className="text-sm leading-none mx-1 text-gray-600 hover:text-gray-900 rounded focus:outline-none h-5 w-5"
                                icon={faCircleMinus}
                              />
                            </a>
                          </div>
                        </div>


                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>

    </>
  );
};

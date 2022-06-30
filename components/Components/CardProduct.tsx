import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react"
import Swal from "sweetalert2";

interface CardComponent {
  name: string;
  description?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
  objectFit: any;

  id?: string;
  price?: number;
}
export const CardComponent: FC<CardComponent> = ({ name, imageSrc, imageAlt, description, width, height, objectFit, href, price, id }) => {
  const router = useRouter();
  const { pathname } = router
  const p = pathname.substring(1).split('/')
  console.log(pathname)

  const onDeleteData = async (id: string) => {
		Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed ) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'El producto ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					}),
				await axios.delete(`${process.env.APIP_URL}/api/clothing/${id}`)
				router.reload()
			}
		})
	}
  return (
    <div className={`${p[0] === 'admin' ? "lg:hidden" : null}`}>
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
          <h3 className={`mt-1 ${p[0] === 'admin' ? "text-sm text-gray-700" : " text-base font-semibold text-gray-900"}`}>
            {name}

          </h3>
          {
            price
              ?
              <p className="mt-1 text-sm  text-gray-500">{price}.00 Bs</p>
              : null
          }
          {
            p[0] 
            ?
            null
            : 
            <p className="mt-1 text-sm  text-gray-500">{description}</p>
          }
        </a>
      </Link>
      {
            p[0] === 'admin'
              ?
              <div onClick={() => onDeleteData(`${id}`)}  className="mt-2 transition text-center duration-150 ease-in-out hover:bg-red-600 focus:outline-none border bg-white border-1 border-red-500 rounded px-8 py-2 text-sm text-red-600  hover:text-white hover:border-0">Eliminar</div>
							
              : null
          }
    </div>
  )
}
import { useRouter } from "next/router"
import { FC } from "react"
import { Wear } from "../src/interfaces/Wear";
import { CardComponent } from "./Components/CardProduct";
import { Main } from './component';

interface GridProduct {
  products: Wear[];
}

export const GridProduct: FC<GridProduct> = ({ products }) => {
  const router = useRouter();
  const { pathname } = router
  const p = pathname.substring(1).split('/')
  console.log(products);
  
  return (
    <Main>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-6`}
      >
        {/* {products.map((product, i) => (
              <CardComponent
                    key={i}
                    name={product.name} 
                    imageSrc={product.imageSrc} 
                    imageAlt={product.imageAlt} 
                    description={product.description} 
                    width={500}
                    height={600} 
                    objectFit='cover'
                    href={
                      router.query.section ? `/${router.query.category}/${router.query.section}/${product.href}` 
                      : 
                      router.query.category ? `/${router.query.category}/${product.href}` : ''
                    }
                  />
                  ))} */}

      </div>
    </Main>

  )
}

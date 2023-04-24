import { InferGetStaticPropsType } from "next";
import { ProductDetails, ProductListItem } from "@/components/Product";

const ProductPage = ({data,}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);
  return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">{
      data.map((product) => {
        return (
          <li key={product.id} className='shadow-xl border-2'>
            <ProductListItem data={
              {
                id: product.id,
                title: product.title,
                imageUrl: product.image,
                imageAlt: product.title,
              }
            }/>
          </li>
        );
      })}
      </ul>
  );
};

export default ProductPage;

export const getStaticProps = async () => {
  const response = await fetch('https://myshop-25uu6susv-dawid-jugowiec.vercel.app/api/products');
 
  const data: StoreApiResponse[] = await response.json();

  return {
    props: {
      data,
    }
  };
};

export interface StoreApiResponse {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      {
    rate:  number;
    count: number;
  };
}
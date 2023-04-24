import { InferGetStaticPropsType } from "next";
import { ProductDetails } from "@/components/Product";
import { useQuery } from "react-query";

const getProducts = async () => {
    const response = await fetch('https://myshop-25uu6susv-dawid-jugowiec.vercel.app/api/products');
    const data: StoreApiResponse[] = await response.json();
    return data;
};

const ProductCsrPage = () => {
  const {data, isLoading, isError} = useQuery('products', getProducts);

  if(isLoading) {
    return <div>Loading...</div>;
  }

  if(!data || isError) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">{
      data.map((product) => {
        return (
          <li key={product.id} className='shadow-xl border-2'>
            <ProductDetails data={
              {
                id: product.id,
                description: product.description,
                title: product.title,
                imageUrl: product.image,
                imageAlt: product.title,
                rating: product.rating.rate,
                longDescription: product.longDescription,
              }
            }/>
          </li>
        );
      })}</ul>

  );
};

export default ProductCsrPage;

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
  longDescription: string;
  category:    string;
  image:       string;
  rating:      {
    rate:  number;
    count: number;
  };
}
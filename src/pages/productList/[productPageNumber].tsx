import { GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ParsedUrlQuery } from "querystring";
import { ProductListItem } from "@/components/Product";
import { ProductNavBar } from "@/components/ProductNavBar";
import { QueryFunctionContext } from '@tanstack/react-query';

const GetProductsPage = async ({ queryKey }: any) => {
  const [_, productPageNumber] = queryKey;
  let offsetIndex = 0;
  if(typeof productPageNumber === 'string') {
    offsetIndex = 25 * Number(productPageNumber);
  }
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/?take=25&offset=${offsetIndex}`);
  const data: StoreApiResponse[] = await response.json();
  return data;
};

const ProductIdPage = () => {
  const router = useRouter()
  const { productPageNumber } = router.query;

  const {data, isLoading, isError} = 
  useQuery(['products', productPageNumber], GetProductsPage);

  if(isLoading) {
    return <div>Loading...</div>;
  }

  if(!data || isError) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
  <div>
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
    })
    }
    </ul>
    <ProductNavBar data={{numberOfPages: 10}}/>
  </div>
);
};

export default ProductIdPage;

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

function Integer(pageNumber: string | string[] | undefined) {
  throw new Error("Function not implemented.");
}

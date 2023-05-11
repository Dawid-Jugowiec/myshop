import { GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";
import { useQuery, QueryFunctionContext } from "react-query";
import { ParsedUrlQuery } from "querystring";
import { ProductListItem } from "@/components/Product";
import { ProductNavBar } from "@/components/ProductNavBar";

const GetProductsPage = async ({ queryKey } : any ) => {
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

  const {data, isLoading, isError} = useQuery(['products', productPageNumber], GetProductsPage);

  if(isLoading) {
    return <div>Loading...</div>;
  }

  if(!data || isError) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
    <>
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
    </>
    
);
};

export async function getStaticPaths() {

  const response = await fetch('https://naszsklep-api.vercel.app/api/products/'); 
  const data: StoreApiResponse[] = await response.json();
  const arrayOfPageNumbers = data.length < 10 ? Array.from({length: data.length}, (_, i) => i + 1) : Array.from({length: 10}, (_, i) => i + 1);


  return {
    paths: arrayOfPageNumbers.map((number) => {
      return {
        params: {productPageNumber: (number).toString()}
      }
      
    }),
    fallback: 'blocking',
  }
}

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticProps = async ({params,}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if(!params?.productPageNumber) {
    return {
      props: {},
      notFound: true,
    };
  }

  let offsetIndex = 0;
  if(typeof params?.productPageNumber === 'string') {
    offsetIndex = 25 * Number(params?.productPageNumber);
  }
  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/?take=25&offset=${offsetIndex}`);

  const data: StoreApiResponse | null = await response.json();

  if(!data) {
    return {
      props: {},
      notFound: true,
    }
  };

  return {
    props: {
      data: {
        ...data,
        longDescription: await serialize(data.longDescription),
      },
    }
  };
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

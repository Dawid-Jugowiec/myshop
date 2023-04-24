import { ProductDetails } from "@/components/Product";
import { GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductIdPage = ({data,}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if(!data) {
    return <div>Coś poszło nie tak</div>
  }
  return <div>
    <Link href="/products/">
      Wróć na stronę główną
    </Link>
    <ProductDetails data={
      {
        id: data.id,
        description: data.description,
        title: data.title,
        imageUrl: data.image,
        imageAlt: data.title,
        rating: data.rating.rate,
        longDescription: data.longDescription,
      }
    }/>
  </div>
};

export default ProductIdPage;
export async function getStaticPaths() {
  const response = await fetch('https://myshop-dawid-jugowiec.vercel.app/api/products/');
  const data: StoreApiResponse[] = await response.json();
  return {
    paths: data.map((product) => {
      return {
        params: {productId: (product.id).toString()}
      }
      
    }),
    fallback: false,
  }
}

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticProps = async ({params,}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if(!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const response = await fetch(`https://myshop-dawid-jugowiec.vercel.app/api/products/${params?.productId}`);
  const data: StoreApiResponse | null = await response.json();

  return {
    props: {
      data: data,
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
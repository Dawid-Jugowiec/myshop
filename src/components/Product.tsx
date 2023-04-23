import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Rating"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Head from "next/head";
import { NextSeo } from "next-seo";

const css = {width: '100%', height: 'auto', backgroundSize: 'contain'};

export const ProductDetails = ({data}: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p-4">
      <NextSeo
        title={data.title}
        description="Testing of description" 
        canonical={`https://fakestoreapi.com/products/${data?.id}`}
        openGraph={{
          url: `https://fakestoreapi.com/products/${data?.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.imageUrl,
              width: 800,
              height: 600,
              alt: data.imageAlt,
              type: 'image/jpeg',
            }
          ],
          siteName: 'Fake shop',
        }}
       /> 
        <Image src={data.imageUrl} alt={data.imageAlt} sizes="100vw" width={16} height={9} style={css}></Image>
      </div>
      <h2>{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="prose lg:prose-xl">
        <ReactMarkdown>{data.longDescription}</ReactMarkdown>
      </article>
      <Rating rating={data.rating}/>
    </>
  );
};

interface ProductDetails {
  id: number,
  description: string,
  title: string,
  imageUrl: string,
  imageAlt: string,
  rating: number,
  longDescription: string;
}


interface ProductDetailsProps {
  data: ProductDetails
};

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'imageUrl' | 'imageAlt'>

interface ProductListItemProps {
  data: ProductListItem
}


export const ProductListItem = ({data}: ProductListItemProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <Image src={data.imageUrl} alt={data.imageAlt} sizes="100vw" width={16} height={9} style={css}></Image>
      </div>      
      <Link href={`/products/${data.id}`}>
        <h2>{data.title}</h2>
      </Link>
   
    </>
  );
};
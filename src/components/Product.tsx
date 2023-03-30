import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Rating"

const css = {width: '100%', height: 'auto', backgroundSize: 'contain'};

export const ProductDetails = ({data}: ProductDetailsProps) => {
  return (
    <>
      <div className="bg-white p-4">
        <Image src={data.imageUrl} alt={data.imageAlt} sizes="100vw" width={16} height={9} style={css}></Image>
      </div>
      <h2>{data.title}</h2>
      <p className="p-4">{data.description}</p>
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
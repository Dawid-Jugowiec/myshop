// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fsPromises from 'fs/promises';
import path from 'path'

type Data = {
  id: number,
  description: string,
  title: string,
  imageUrl: string,
  imageAlt: string,
  rating: number,
  longDescription: string;
}

export default async function handler(
  req: NextApiRequest,
  res: any,
) {

  const productId = Number(req.query.productId);

  const jsonDirectory = path.join(process.cwd(), 'json');
  const jsonData = await fsPromises.readFile(jsonDirectory + '/products.json', 'utf8');
  const objectData = JSON.parse(jsonData.toString());

  const selectedItem = objectData.find((el: Data) => el.id === productId);

  if(!selectedItem) {
    res.status(400).send("Invalid product id!!");
  }


  res.status(200).json(selectedItem)
}
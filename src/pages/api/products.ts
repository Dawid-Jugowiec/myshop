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
  const jsonData = await fsPromises.readFile('./src/pages/api/products.json');
  const objectData = JSON.parse(jsonData.toString());
  res.status(200).json(objectData)
}
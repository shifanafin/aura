import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props={params:{slug:string}}

// dynamically generate metadata for each product page
export async function generateMetadata({params}: Props):Promise<Metadata> {
const product = await fetch(`https://fakestoreapi.com/products/${params.slug}`).then(res=>res.json());


if(!product?.id){
  return notFound();
}

return {
  title: product.title,
  description: product.description,
  openGraph: {
    title: product.title,
    description: product.description,
    images: [product.image],
  },
}
}
type Props = { params: { slug: string } };

export default function ProductDetailPage({ params }: Props) {
  return <h2>Product: {params.slug}</h2>;
}

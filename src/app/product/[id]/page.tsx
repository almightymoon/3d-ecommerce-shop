import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductGallery from '@/components/ProductGallery';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();
  return (
    <main className="container">
      <ProductGallery product={product} />
    </main>
  );
}

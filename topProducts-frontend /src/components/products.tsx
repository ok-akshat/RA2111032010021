import ProductCard from "@/components/card";
import { Product } from "@/types";
import { products } from "@/app/mock";

const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export default async function Products() {
  const products = await getProducts();
  
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

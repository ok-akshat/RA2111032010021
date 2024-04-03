export type Product = {
  id: string;
  name: string;
  company: string;
  category: string;
  price: number;
  rating: number;
  discount: number;
  availability: "yes" | "out-of-stock";
  imageSrc: string;
};

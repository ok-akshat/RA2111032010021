import { Product } from "@/types";
import Badge from "@mui/material/Badge";
import Link from "next/link";

interface ProductCardProps extends Product {}

export default function ProductCard({
  id,
  name,
  company,
  category,
  price,
  rating,
  imageSrc,
}: ProductCardProps) {
  return (
    <div className="relative flex flex-col gap-5 bg-black text-white px-5 pb-5 w-72 h-96 rounded-lg justify-between hover:border-4 hover:border-primary">
      <img
        src={imageSrc}
        alt="image of a keyboard"
        className="w-72 self-center rounded-lg"
      />
      <Link
        className="absolute w-64 flex rounded-lg bg-black-too px-4 py-2 justify-between items-center backdrop-blur-lg top-2 right-2"
        href={`/product/${id}`}
      >
        <p>{name}</p>
        <p className="m-0.5 rounded-full bg-primary px-3 py-1 text-black">
          ${price}
        </p>
      </Link>
      <div className="flex gap-2">
        <Badge color="primary">{company}</Badge>
        <Badge color="primary">{category}</Badge>
        <Badge color="primary">{rating}</Badge>
      </div>
    </div>
  );
}

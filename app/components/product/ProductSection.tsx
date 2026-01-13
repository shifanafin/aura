"use client";

import { Suspense, useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import SearchInput from "@/components/SearchInput";
import ProductCard from "@/components/product/ProductCard";

import Pagination from "@/components/Pagination";
import LoginPage from "@/login/page";
import LogOutPage from "@/logout/page";
type Props = {
  products: any[];
};

export default function ProductSection({ products: data }: Props) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
const totalPages = 10;
const pageSize = 6;

  const filtered = data?.filter((products: any) => {
    return (
      (category === "all" || products.category === category) &&
      products.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const start = (page - 1) * pageSize;
  const paginated = filtered.slice(start, start + pageSize);

  return (
    <>
      <FilterPanel onFilterChange={setCategory} />
      <SearchInput onSearchChange={setSearch} />
      {paginated.map((product: any) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.image}
        />
      ))}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    
    </>
  );
}

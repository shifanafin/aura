export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
    headers: {
      "Cache-Control": "no-store",
    },
    next: { revalidate: 60 },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return data;
}

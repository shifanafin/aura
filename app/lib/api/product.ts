export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",

    next: { revalidate: 160 },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  console.log("Fetched products:22", data);
  return data;
}

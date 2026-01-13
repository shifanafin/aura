import { getUserFromSession } from "@/lib/auth";

export default async function CartPage() {
  const user = getUserFromSession();

  // Guaranteed authenticated (middleware)
  return (
    <div>
      <h1>Cart</h1>
      <p>User</p>
    </div>
  );
}
    
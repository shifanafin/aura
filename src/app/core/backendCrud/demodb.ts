import { prisma } from "@/lib/prisma";

async function main() {
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      email: "shifana@gmail.com",
      name: "shifana",
    },
  });
  console.log("Created new user:", newUser);

  // Fetch all users
  const allUsers = await prisma.user.findMany();
  console.log("All users:", allUsers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

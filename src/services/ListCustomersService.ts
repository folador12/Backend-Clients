import prismaClient from "../prisma";

interface ListCustomersProps {
  name: string;
  email: string;
  status: string;
}

class ListCustomersService {
  async execute({ name, email, status }: ListCustomersProps) {
    const customers = await prismaClient.customer.findMany({
      where: {
        name: {
          contains: name ? name : undefined,
          mode: "insensitive",
        },
        email: {
          contains: email ? email : undefined,
          mode: "insensitive",
        },
        status: {
          contains: status ? status : undefined,
          mode: "insensitive",
        }
      },
    });

    return customers;
  }
}

export { ListCustomersService };

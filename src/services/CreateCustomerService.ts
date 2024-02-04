import prismaClient from "../prisma";

interface CreateCustomerProps {
  email: string;
  name: string;
}

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const customerAlreadyExists = await prismaClient.customer.findFirst({
      where: {
        email,
      },
    });

    if (customerAlreadyExists) {
      throw new Error("Customer already exists");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: "a",
      },
    });

    return customer;
  }
}

export { CreateCustomerService };

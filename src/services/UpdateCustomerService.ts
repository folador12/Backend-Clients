import prismaClient from "../prisma";

interface UpdateCustomerProps {
  id: string;
  email: string;
  name: string;
}

class UpdateCustomerService {
  async execute({ id, name, email }: UpdateCustomerProps) {
    if (!id || !name || !email) {
      throw new Error("Id, name and email are required");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Customer not found");
    }

    await prismaClient.customer.update({
      where: {
        id: findCustomer.id,
      },
      data: {
        name,
        email,
      },
    });

    return { message: "Customer updated successfully" };
  }
}

export { UpdateCustomerService };

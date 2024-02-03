import prismaClient from "../prisma";

interface UpdateStatusCustomerProps {
  id: string;
  status: string;
}

class UpdateStatusCustomerService {
  async execute({ id, status }: UpdateStatusCustomerProps) {
    if (!id || !status) {
      throw new Error("Id and status are required");
    }

    if (status !== "a" && status !== "i") {
      throw new Error("Invalid status");
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
        status : status,
      },
    });

    return { message: "Customer status updated successfully" };
  }
}

export { UpdateStatusCustomerService };

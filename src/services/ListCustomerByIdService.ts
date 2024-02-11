import prismaClient from "../prisma";

interface ListCustomersProps {
  id: string;
}

class ListCustomerByIdService {
  async execute({ id}: ListCustomersProps) {
    
    const customer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    return customer;
  }
}

export { ListCustomerByIdService };

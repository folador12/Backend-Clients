import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerByIdService } from "../services/ListCustomerByIdService";

class ListCustomerByIdController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as {
      id: string;
    };
    const listCustomerService = new ListCustomerByIdService();

    const customers = await listCustomerService.execute({
      id,
    });

    reply.send(customers);
  }
}

export { ListCustomerByIdController };

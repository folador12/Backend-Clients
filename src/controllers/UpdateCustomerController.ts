import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };
    const { id } = request.params as { id: string };

    const updateCustomerService = new UpdateCustomerService();

    const customer = await updateCustomerService.execute({ id, name, email });

    reply.send(customer);
  }
}

export { UpdateCustomerController };
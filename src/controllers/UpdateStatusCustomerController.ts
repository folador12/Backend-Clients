import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateStatusCustomerService } from "../services/UpdateStatusCustomerService";

class UpdateStatusCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { status } = request.body as { status: string };

    const updateStatusCustomerService = new UpdateStatusCustomerService();
    const customer = await updateStatusCustomerService.execute({ id, status });

    reply.send(customer);
  }
}

export { UpdateStatusCustomerController };

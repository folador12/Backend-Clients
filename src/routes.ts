import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { UpdateStatusCustomerController } from "./controllers/UpdateStatusCustomerController";
import { ListCustomerByIdController } from "./controllers/ListCustomerByIdController";

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply);
    }
  );

  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.put(
    "/customer/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateCustomerController().handle(request, reply);
    }
  );

  fastify.put(
    "/customer/status/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateStatusCustomerController().handle(request, reply);
    }
  );

  fastify.delete(
    "/customer/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/customerById/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomerByIdController().handle(request, reply);
    }
  );
}

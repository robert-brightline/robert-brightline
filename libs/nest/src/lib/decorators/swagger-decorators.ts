import { ApiBody, ApiQuery } from '@nestjs/swagger';

export function SwaggerManyQuery(): MethodDecorator {
  return (...args) => {
    ApiQuery({
      name: 'select',
      description: 'Projection',
      type: 'object',
      default: { select: { id: true } },
      required: false,
    })(...args);
    ApiQuery({
      name: 'orderBy',
      type: 'object',
      description: 'Order',
      default: { orderBy: { id: 'asc' } },
      required: false,
    })(...args);
    ApiQuery({
      name: 'where',
      type: 'object',
      description: 'Query',
      default: { where: { id: 1 } },
      required: false,
    })(...args);
    ApiQuery({
      name: 'take',
      type: 'integer',
      description: 'Pagination',
      default: 3,
      required: false,
    })(...args);
    ApiQuery({
      name: 'skip',
      type: 'integer',
      description: 'Pagination',
      default: 0,
      required: false,
    })(...args);
  };
}

export function SwaggerProjectQuery(): MethodDecorator {
  return (...args) => {
    ApiQuery({
      name: 'select',
      description: 'Projection',
      type: 'object',
      default: { select: { id: true } },
      required: false,
    })(...args);
  };
}

export function SwaggerBody(): MethodDecorator {
  return (...args) => {
    ApiBody({
      schema: {
        type: 'object',
        properties: {},
        default: {},
        example: {},
      },
    })(...args);
  };
}

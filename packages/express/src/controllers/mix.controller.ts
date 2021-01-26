import { Controller, HTTP_METHOD } from '../types';
import { controller, inject, route } from '../attributes/express';
import MixRepository from '../repositories/mix.repository';
import { Response } from 'express';

@controller()
export class MixController extends Controller {
  @inject(MixRepository)
  private mixRepository!: MixRepository;

  @route(HTTP_METHOD.GET, '/:id')
  getById({ id, response }: { id: string; response: Response }) {
    response.send(id);
  }
}

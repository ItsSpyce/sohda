import { Controller, HTTP_METHOD } from '../types';
import { controller, inject, route } from '../attributes/express';
import MixRepository from '../repositories/mix.repository';

@controller()
export class MixController extends Controller {
  @inject(MixRepository)
  private mixRepository!: MixRepository;

  @route(HTTP_METHOD.GET, '/:id?')
  getById = ({ id }: { id: string }) => {
    this.notFound();
  };
}

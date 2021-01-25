import { controller, inject, route } from '../attributes/express';
import MixRepository from '../repositories/mix.repository';
import { HTTP_METHOD } from '../types';

@controller()
export default class MixController {
  @inject()
  private mixRepository!: MixRepository;

  @route('/:id', HTTP_METHOD.GET)
  getById(id: string) {}
}

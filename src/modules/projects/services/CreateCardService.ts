import { injectable, inject } from 'tsyringe';

import ICardsRepository from '../repositories/ICardsRepository';

import Card from '../infra/typeorm/entities/Cards';

interface IRequest {
  id?: string;
  project_id: string;
  column: number;
  taskName: string;
  description: string;
  owner_id: string;
  blocked: boolean;
  whyBlocked?: string;
}

@injectable()
class CreateCardService {
  
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
 
  ) {}

  public async execute({
    project_id,
    column,
    taskName,
    description,
    owner_id,
    blocked,
    whyBlocked,

  }: IRequest): Promise<Card> {

    const card = await this.cardsRepository.create({
      project_id,
      column,
      taskName,
      description,
      owner_id,
      blocked,
      whyBlocked,

    });
    
    return card;
  }
}

export default CreateCardService;

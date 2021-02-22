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
class UpdateCardService {
  
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
 
  ) {}

  public async execute(task: IRequest): Promise<Card> {

    const card = await this.cardsRepository.save(task);
    
    return card;
  }
}

export default UpdateCardService;

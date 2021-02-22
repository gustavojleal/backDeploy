import { injectable, inject } from 'tsyringe';

import ICardsRepository from '@modules/projects/repositories/ICardsRepository';

@injectable()
class FindOneCardService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,

  ) {}

  public async execute(id: string): Promise<any> {

    const card = await this.cardsRepository.findOneCard(id)

    return card
  }
  
}
export default FindOneCardService;

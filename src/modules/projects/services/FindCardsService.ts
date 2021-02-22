import { injectable, inject } from 'tsyringe';

import ICardsRepository from '@modules/projects/repositories/ICardsRepository';

@injectable()
class FindProjectService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,

  ) {}

  public async execute(projectId: any): Promise<any> {

    const project = await this.cardsRepository.findAllCards(projectId)

    return project
  }
  
}
export default FindProjectService;

import { getRepository, Repository, Raw } from 'typeorm';

import ICardsRepository from '@modules/projects/repositories/ICardsRepository';
import ICreateCardDTO from '@modules/projects/dtos/ICreateCardDTO';

import Card from '../entities/Cards';


class CardsRepository implements ICardsRepository {
  private ormRepository: Repository<Card>;

  constructor() {
    this.ormRepository = getRepository(Card);
  }

  public async findCardsForProject(ids: string[]): Promise<Card[]> {
    const cards = this.ormRepository.findByIds(ids)

    return cards
  }

  public async create({
    project_id,
    column,
    taskName,
    description,
    owner_id,
    blocked,
    whyBlocked,
  }: ICreateCardDTO): Promise<Card> {
    const card = this.ormRepository.create({
      project_id,
      column,
      taskName,
      description,
      owner_id,
      blocked,
      whyBlocked,
   
    });

    await this.ormRepository.save(card);

    return card;
  }

  public async save(data: {
    project_id: string;
    column: number
    taskName: string;
    description: string;
    owner_id: string;
    blocked: boolean;
    whyBlocked?: string;
  }[]): Promise<any> {
    const card = this.ormRepository.save(data);

    // await this.ormRepository.save(card);

    return card;
  }

  public async findAllCards(ids: string[]): Promise<Card[]> {
    const cards = await this.ormRepository.findByIds(ids)

    return cards
  }

  public async findOneCard(id: string): Promise<Card | undefined> {
    const card = await this.ormRepository.findOne(id)

    return card
  }

}



export default CardsRepository;

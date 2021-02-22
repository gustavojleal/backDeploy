import Card from '../infra/typeorm/entities/Cards'
import ICreateCardDTO from '../dtos/ICreateCardDTO';

export default interface ICardsRepository {
  create(data: ICreateCardDTO): Promise<Card>;
  save(data: ICreateCardDTO): Promise<Card>;
  findAllCards(ids: string[]): Promise<Card[]>;
  findOneCard(ids: string): Promise<Card | undefined>;
  // findWithSameName(name: string): Promise<Project | undefined>;
  // findAllForUser(user_id: string): Promise<Project[]>;
}

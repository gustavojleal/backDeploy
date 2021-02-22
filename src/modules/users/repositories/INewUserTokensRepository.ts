import NewUserToken from '../infra/typeorm/entities/NewUserToken';

export default interface INewserTokensRepository {
  generate(name: string, email: string, note?: string): Promise<NewUserToken>;
  findByToken(token: string): Promise<NewUserToken | undefined>;
}

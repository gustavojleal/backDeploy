import Contributor from '../infra/typeorm/entities/Contributors'
import ICreateContributorDTO from '../dtos/ICreateContributorDTO';

export default interface IContributorsRepository {
  create(data: ICreateContributorDTO): Promise<Contributor>;
  findAllForUser(user_id: string): Promise<Contributor[]>;
  // findWithSameName(name: string): Promise<Project | undefined>;
}

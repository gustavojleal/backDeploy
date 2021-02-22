import ICreateCardDTO from './ICreateCardDTO'

export default interface ICreateProjectDTO {
  id?: string;
  name: string;
  createdBy_id: string;
  responsable_id: string;
  tasks?: ICreateCardDTO[];
  structure: JSON;
}

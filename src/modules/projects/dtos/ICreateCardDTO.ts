export default interface ICreateCardDTO {
  id?: string;
  project_id: string;
  column: number
  taskName: string;
  description: string;
  owner_id: string;
  blocked: boolean;
  whyBlocked?: string;
}

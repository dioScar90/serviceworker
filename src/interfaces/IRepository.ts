export interface IRepository<T> {
  create(item: T): Promise<boolean>
  update(id: string, item: T): Promise<boolean>
  delete(id: string): Promise<boolean>
  findAll(page: number, perPage: number): Promise<T[]>
  find(id: string): Promise<T | null>
}
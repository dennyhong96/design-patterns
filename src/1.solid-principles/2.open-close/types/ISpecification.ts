export interface ISpecification<T, U> {
  spec: T;
  isSatisfied(item: U): boolean;
}

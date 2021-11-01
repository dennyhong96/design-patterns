import { ISpecification } from "./types/ISpecification";

export class ProductFilter {
  // ProductFilter is open for extension and close for modification
  // becasing adding a new filter type doesn't require modifying ProductFilter
  // class, it only requires adding new specifications that implement ISpecification
  filter<T, U>(items: T[], specification: ISpecification<U, T>) {
    return items.filter((it) => specification.isSatisfied(it));
  }
}

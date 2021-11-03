export type ConstructorWithInstanceType<T> = {
  new (...args: any[]): T;
  _instance?: T;
};

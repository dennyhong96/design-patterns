export class Address {
  constructor(
    public street?: string,
    public city?: string,
    public state?: string,
    public zipCode?: string
  ) {}

  public deepCopy() {
    return new Address(this.street, this.city, this.state, this.zipCode);
  }
}

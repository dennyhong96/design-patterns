export class Username {
  // Flyweight
  public static namesCache: string[] = [];

  private firstnameIndexInCache: number;
  private lastnameIndexInCache: number;

  constructor(public fullname: string) {
    const [firstname, lastname] = fullname.split(" ").filter(Boolean);

    // Store indexes in shared static cache(flyweight) instead of the name itself
    // saves memory when some users have the same name
    this.firstnameIndexInCache = this.getNameIndexFromCache(firstname);
    this.lastnameIndexInCache = this.getNameIndexFromCache(lastname);
  }

  public get firstname() {
    return Username.namesCache[this.firstnameIndexInCache];
  }

  public get lastname() {
    return Username.namesCache[this.lastnameIndexInCache];
  }

  public toString() {
    return `${this.firstname} ${this.lastname}`;
  }

  private getNameIndexFromCache(name: string) {
    const index = Username.namesCache.findIndex((n) => n === name);
    if (index < 0) {
      Username.namesCache.push(name);
      return Username.namesCache.length - 1;
    }
    return index;
  }
}

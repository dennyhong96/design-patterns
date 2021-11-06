// The connectable class both scalar object and collection of scalar objects extends
// So they have the same interface when consumed
export class Connectable<T> {
  connectTo(other: Connectable<T>) {
    for (const from of this) {
      for (const to of other) {
        // @ts-ignore
        from.out.push(to);
        // @ts-ignore
        to.in.push(from);
      }
    }
  }

  [Symbol.iterator]() {
    return {
      next: () => ({
        value: {},
        done: true,
      }),
    };
  }
}

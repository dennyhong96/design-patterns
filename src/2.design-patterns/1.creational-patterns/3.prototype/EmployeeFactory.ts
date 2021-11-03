import { Serializer } from "./Serializer";
import { Address } from "./Address";
import { Person } from "./Person";

export class EmployeeFactory {
  // 2 Prototypes to build off of
  private static mainCampusEmployee = new Person(
    undefined,
    undefined,
    new Address("9000 Roosevelt Way", "Seattle", "WA", "98005")
  );

  private static newCampusEmployee = new Person(
    undefined,
    undefined,
    new Address("1234 5th Ave", "Los Angeles", "California", "10015")
  );

  // Uses the serializer class
  private static _newEmployee(prototype: Person, name: string, age: number) {
    const serializer = new Serializer([Person, Address]);
    const newEmployee = serializer.clone(prototype);
    newEmployee.name = name;
    newEmployee.age = age;
    return newEmployee;
  }

  public static newMainCampusEmployee(name: string, age: number) {
    return EmployeeFactory._newEmployee(
      EmployeeFactory.mainCampusEmployee,
      name,
      age
    );
  }

  public static newNewCampusEmployee(name: string, age: number) {
    return EmployeeFactory._newEmployee(
      EmployeeFactory.newCampusEmployee,
      name,
      age
    );
  }
}

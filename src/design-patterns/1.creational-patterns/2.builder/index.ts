import { User } from "./User";
import { UserBuilder } from "./UserBuilder";

// Builder pattern solves the problem of telescoping constructor
export async function BuilderPattern() {
  const user: User = new UserBuilder("Denny")
    .setAge(24)
    .setPhone("206-xxx-xxxx")
    .setAddress("9000 5th Ave N")
    .build();

  console.log(
    `User: ${user.Name}, ${user.Age}, ${user.Phone}, ${user.Address}`
  );
}
BuilderPattern();

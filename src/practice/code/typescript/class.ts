interface User {
  name: string;
  id: number;
}

class UserAccount {
  public name: string;
  public id: number;
  private age: number;

  constructor({ name, id }: User) {
    this.name = name;
    this.id = id;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user = new UserAccount({ name: "Murphy", id: 1 });

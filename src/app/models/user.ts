export class User {
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    postalCode: number;
    city: string;
  };

  constructor(input?: User) {
    if (input != null) {
      Object.assign(this, input);
    }
  }
}

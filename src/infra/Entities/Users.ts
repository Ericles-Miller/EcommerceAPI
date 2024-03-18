import { uuid } from "uuidv4";

import { Base } from "./Base";

export class Users extends Base {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  addressId: string;
  active: boolean;

  constructor(
    name: string,
    email: string,
    password: string,
    addressId: string,
  ) {
    const id = uuid();
    const createdAt = new Date();
    const updatedAt = new Date();

    super(id, createdAt, updatedAt);
    
    this.active = true;
    this.name = name;
    this.password = password;
    this.addressId = addressId;
    this.email = email;

  }
}

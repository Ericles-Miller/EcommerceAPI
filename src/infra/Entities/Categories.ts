import { uuid } from "uuidv4";

import { Base } from "./Base";

export class Categories extends Base {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    const id = uuid();
    const createdAt = new Date();
    const updatedAt = new Date();

    super(id, createdAt, updatedAt);

    this.description = description;
    this.name = name;
  }
}

export abstract class Base {
  createdAt: Date;
  updatedAt?: Date;
  id: string;

  constructor(id: string, createdAt: Date, updatedAt: Date) {
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.id = id;
  }

  set setCreatedAt() {
    this.createdAt = new Date();
  }

  set setUpdatedAt() {
    this.updatedAt = new Date();
  }

  get getCreatedAt() {
    return this.createdAt;
  }

  get getUpdateAt() {
    return this.updatedAt;
  }
}

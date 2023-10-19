export interface IRequestCreateUserDTO {
  name: string;
  email: string;
  password: string;
  addressId: string;
  createdAt?: Date;
}

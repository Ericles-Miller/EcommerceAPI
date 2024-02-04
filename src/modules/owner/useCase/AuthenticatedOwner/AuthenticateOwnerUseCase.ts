import { IOwnerRepository } from "@modules/owner/infra/repositories/IRepositories/IOwnerRepository";
import { OwnerRepository } from "@modules/owner/infra/repositories/OwnersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateOwnerUseCase {
  constructor(
    @inject(OwnerRepository)
    private ownerRepository: IOwnerRepository,
  ) {}

  async execute(email: string, password: string): Promise<IResponse> {
    const owner = await this.ownerRepository.listOwnerByEmail(email);

    if (!owner) {
      throw new AppError("password or email incorrect!");
    }

    const passwordMatch = await compare(password, owner.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }
    const secretToken = process.env.SECRET_TOKEN_OWNER;
    if (secretToken) {
      const token = sign({}, secretToken, {
        subject: owner.id,
        expiresIn: "5m",
      });

      const tokenReturn: IResponse = {
        token,
        user: {
          name: owner.name,
          email: owner.email,
        },
      };

      return tokenReturn;
    }
    throw new AppError("secret token is missing!", 504);
  }
}

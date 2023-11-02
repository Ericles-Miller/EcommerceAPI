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
    console.log(owner);

    if (!owner) {
      throw new AppError("password or email incorrect!");
    }

    const passwordMatch = await compare(password, owner.password);
    console.log(passwordMatch);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "40fe3ccb6f87eb4cf80f3c5dda631e2f", {
      subject: owner.id,
      expiresIn: "5m",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: email,
        email: owner.email,
      },
    };

    return tokenReturn;
  }
}

import { IUsersRepository } from "@modules/accounts/infra/Repositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/Repositories/UsersRepository";
import { AppError } from "@shared/error/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute(email: string, password: string): Promise<IResponse> {
    const user = await this.usersRepository.listUserByEmail(email);
    if (!user) {
      throw new AppError("email or password is incorrect!");
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "40fe3ccb6f87eb4cf80f3c5dda631e2f", {
      // chave do token
      subject: user.id, // relaciona ao id
      expiresIn: "1d", // tempo para expirar
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: email,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

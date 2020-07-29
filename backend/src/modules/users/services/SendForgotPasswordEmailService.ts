import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
//import User from '../infra/typeorm/entities/User';


interface IUserRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository,

    @inject("MailProvider")
    private mailProvider: IMailProvider,

    @inject("UserTokensRepository")
    private userTokensRepository: IUserTokensRepository,


  ) {}

  public async execute({ email }: IUserRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email)

    if(!user)
      throw new AppError("User does not exists.")

    await this.userTokensRepository.generate(user.id)
    
    this.mailProvider.sendMail(email, "Pedido de recuperação de senha recebido")
  }
}

export default SendForgotPasswordEmailService;

//import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeMailProvider from "@shared/container/providers/MailProvider/fakes/FakeMailProvider"
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider()

    const sendEmail = jest.spyOn(fakeMailProvider, "sendMail")

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider
    );

    await fakeUsersRepository.create({
        name: 'João Câmara',
        email: 'teste@teste.com',
        password: 'teste123'
    })

    await sendForgotPasswordEmail.execute({
      email: 'teste@teste.com',
    });

    expect(sendEmail).toHaveBeenCalled()
  });

});

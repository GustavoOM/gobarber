import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

describe('CreateUsers', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUserService.create({
      name: 'João Câmara',
      email: 'teste@teste.com',
      password: 'teste123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with the same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUserService.create({
      name: 'João Câmara',
      email: 'teste@teste.com',
      password: 'teste123',
    });

    expect(
      createUserService.create({
        name: 'João Câmara',
        email: 'teste@teste.com',
        password: 'teste123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

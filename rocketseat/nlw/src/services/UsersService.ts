import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";

interface IUserInsert {
    email: string
}

export default class UsersService {
    async insert({ email }: IUserInsert) {
        const usersRepository = getCustomRepository(UsersRepository);

        // verifica se o usuario existe
        const userExists = await usersRepository.findOne({ email });

        // se existe retorna o usuario
        if (userExists)
            return userExists;

        // se nao existir, cadastrar usuario no banco de dados
        const user = usersRepository.create({ email });        
        await usersRepository.save(user);

        // retornar usuario
        return user;
    }
}
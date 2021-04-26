import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";

interface IUserInsert {
    email: string
}

export default class UsersService {
    private _usersRepository: UsersRepository;

    constructor(){
        this._usersRepository = getCustomRepository(UsersRepository);
    }

    async insert({ email }: IUserInsert) {
        // verifica se o usuario existe
        const userExists = await this._usersRepository.findOne({ email });

        // se existe retorna o usuario
        if (userExists)
            return userExists;

        // se nao existir, cadastrar usuario no banco de dados
        const user = this._usersRepository.create({ email });        
        await this._usersRepository.save(user);

        // retornar usuario
        return user;
    }
}
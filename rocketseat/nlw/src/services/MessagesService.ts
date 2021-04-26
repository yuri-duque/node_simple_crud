import { getCustomRepository } from "typeorm";
import MessagesRepository from "../repositories/MessagesRepository";

interface IMessageInsert {
    admin_id?: string;
    text: string;
    user_id: string;
}

export default class MessagesService {
    private _messagesRepository : MessagesRepository;

    constructor(){
        this._messagesRepository = getCustomRepository(MessagesRepository)
    }

    async insert({ admin_id, text, user_id }: IMessageInsert) {
        const message = this._messagesRepository.create({ admin_id, text, user_id });

        await this._messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        const list = await this._messagesRepository.find({ user_id });

        return list;
    }
}
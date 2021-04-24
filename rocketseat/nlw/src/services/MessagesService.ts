import { getCustomRepository } from "typeorm";
import MessagesRepository from "../repositories/MessagesRepository";

interface IMessageInsert{
    admin_id?: string;
    text: string;
    user_id: string;
}

export default class MessagesService{
    async insert({admin_id, text, user_id} : IMessageInsert){
        const messagesRepository = getCustomRepository(MessagesRepository);

        const message = messagesRepository.create({ admin_id, text, user_id });

        await messagesRepository.save(message);

        return message;
    }
}
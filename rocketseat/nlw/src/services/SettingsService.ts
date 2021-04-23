import { getCustomRepository } from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

export default class SettingsService {
    async insert({ chat, username }: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await  this.findByUsername(username);

        if(userAlreadyExists)
            throw new Error("User already exists!");

        const settings = settingsRepository.create({ chat, username });

        await settingsRepository.save(settings);

        return settings;
    }

    async findByUsername(username){
        const settingsRepository = getCustomRepository(SettingsRepository);

        // SELECT * FROM settings WHERE username = "username" limit 1
        return await settingsRepository.findOne({username});
    }
}
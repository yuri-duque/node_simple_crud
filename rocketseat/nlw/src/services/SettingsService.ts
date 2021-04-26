import { getCustomRepository } from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

export default class SettingsService {
    private _settingsRepository : SettingsRepository;

    constructor(){
        this._settingsRepository = getCustomRepository(SettingsRepository);
    }

    async insert({ chat, username }: ISettingsCreate) {
        const userAlreadyExists = await  this.findByUsername(username);

        if(userAlreadyExists)
            throw new Error("User already exists!");

        const settings = this._settingsRepository.create({ chat, username });

        await this._settingsRepository.save(settings);

        return settings;
    }

    async findByUsername(username){
        // SELECT * FROM settings WHERE username = "username" limit 1
        return await this._settingsRepository.findOne({username});
    }
}
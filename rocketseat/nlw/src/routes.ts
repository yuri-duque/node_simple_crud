import { Router } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
*    Tipos de parametros
*
*    Routes Params => Parametros de rotas        --> http://localhost:3333/settings/1
*    Query Params  => Filtros e buscases         --> http://localhost:3333/settings?search=algumacoisa
*    Body Params   => Insercoes ou atualizacoes  --> { "username": "teste" }
*/

routes.post("/settings", async (req, res) => {
    const {chat, username} = req.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    });

    await settingsRepository.save(settings);

    return res.json(settings);
})

export { routes };
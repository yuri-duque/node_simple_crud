import { Router } from "express"
import SettingsController from "./controllers/SettingsController";
import UsersController from "./controllers/UsersConstroller";

const routes = Router();

const settingsController = new SettingsController();
routes.post("/settings", settingsController.create);

const usersController = new UsersController();
routes.post("/users", usersController.create);

export { routes };
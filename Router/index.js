import express from "express";
import notesrouter from "./NotesRouter/notesrouter.js";

const Router = express();
const api = "/api/v1";

Router.use(api, notesrouter);

export default Router;

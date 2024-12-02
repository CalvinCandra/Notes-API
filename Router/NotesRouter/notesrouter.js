import express from "express";
import { getNotes } from "../../Controller/notescontroller.js";

const notesrouter = express();

notesrouter.get("/getnotes", getNotes);

export default notesrouter;

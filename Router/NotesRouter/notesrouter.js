import express from "express";
import { getNotes, updateNotes } from "../../Controller/notescontroller.js";

const notesrouter = express();

notesrouter.get("/getnotes", getNotes);
notesrouter.put("/update/:id", updateNotes);

export default notesrouter;

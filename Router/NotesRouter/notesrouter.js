import express from "express";
import { updateNotes } from "../../Controller/notescontroller.js";

const notesrouter = express();

notesrouter.put("/update/:id", updateNotes);

export default notesrouter;

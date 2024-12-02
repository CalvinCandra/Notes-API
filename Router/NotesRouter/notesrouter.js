import express from "express";
import { getNotes, updateNotes, addnotes } from "../../Controller/notescontroller.js";

const notesrouter = express();

notesrouter.get("/getnotes", getNotes);
notesrouter.post("/addnotes", addnotes);
notesrouter.put("/update/:id", updateNotes);

export default notesrouter;

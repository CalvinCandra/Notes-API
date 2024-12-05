import express from "express";
import {
  getNotes,
  updateNotes,
  addnotes,
  getNoteById,
} from "../../Controller/notescontroller.js";

const notesrouter = express();

notesrouter.get("/getnotes", getNotes);
notesrouter.post("/addnotes", addnotes);
notesrouter.put("/update/:id", updateNotes);
notesrouter.search("/notes/:id", getNoteById);

export default notesrouter;

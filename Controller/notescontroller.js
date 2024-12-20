import { query } from "../Database/database.js";

// get data
const getNotes = async (req, res) => {
  try {
    // Query untuk mendapatkan data
    const results = await query(`SELECT * FROM notes`);

    return res.status(200).json({
      msg: "Berhasil",
      data: results,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Gagal mendapatkan data",
      error: error.message,
    });
  }
};

// add data
const addnotes = async (req, res) => {
  const { title, note } = req.body;

  try {
    const result = await query(
      `INSERT INTO notes (title, datetime, note) VALUES (?, NOW(), ?)`,
      [title, note]
    );

    return res.status(200).json({
      msg: "Notes berhasil ditambahkan",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Gagal menambahkan data",
      error: error.message,
    });
  }
};

// update notes
const updateNotes = async (req, res) => {
  const { title, note } = req.body;
  const { id } = req.params;

  try {
    await query(
      "UPDATE notes SET title = ?, datetime = NOW() ,note = ? WHERE id = ?",
      [title, note, id]
    );

    const check = await query("SELECT id FROM notes WHERE id = ?", [id]);
    if (check.length === 0) {
      return res.status(404).json({
        msg: "Maaf, data dengan ID ini tidak ditemukan",
      });
    }

    return res.status(200).json({
      message: "Notes Berhasil Update",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Notes Gagal Update",
      error,
    });
  }
};

// get one note
const getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await query("SELECT * FROM notes WHERE id = ?", [id]);

    if (result.length === 0) {
      return res.status(404).json({
        msg: "Maaf, data dengan ID ini tidak ditemukan",
      });
    }

    return res.status(200).json({
      msg: "Berhasil",
      data: result[0],
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Gagal mendapatkan data",
      error: error.message,
    });
  }
};

// Delete notes by ID
const deleteNotesbyid = async (req, res) => {
  const { id } = req.params;

  // cek id, apakah ada atau tidak
  const cek = await query(`SELECT * FROM notes WHERE notes.id = ?`, [id]);
  if (cek.length === 0) {
    return res.status(400).json({
      msg: "Maaf, data dengan ID ini tidak ditemukan",
    });
  }

  try {
    await query("DELETE FROM notes WHERE id = ?", [id]);

    res.status(200).json({ message: "Berhasil" });
  } catch (err) {
    res.status(500).json({
      msg: "gagal menghapus",
      error: err.message,
    });
  }
};

export { getNotes, updateNotes, addnotes, getNoteById, deleteNotesbyid };

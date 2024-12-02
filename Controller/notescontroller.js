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

// update notes
const updateNotes = async (req, res) => {
  const { title, note } = req.body;
  const { id } = req.params;

  try {
    await query("UPDATE notes SET title = ?, note = ? WHERE id = ?", [
      title,
      note,
      id,
    ]);
    res.status(200).json({
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

export { getNotes, updateNotes };

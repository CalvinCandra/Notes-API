import { query } from "../Database/database.js";

// update notes
const updateNotes = async (req, res) => {
  const { title, note } = req.body;
  const { id } = req.params;

  // cek apakah id ada atau tidak
  const cek = await query("SELECT * FROM notes WHERE id = ?", [id]);
  if (cek.length === 0) {
    return res.status(404).json({
      message: "Notes Not Found",
    });
  }

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

export { updateNotes };

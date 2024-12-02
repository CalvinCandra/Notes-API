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

export { getNotes };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const condidat = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    category: { type: String, required: false },
    poids: { type: String, required: false },
    age: { type: String, required: true },
    club: { type: String, required: true },
  },
  {
    collection: "condidats",
  }
);

export default mongoose.models.Condidat || mongoose.model("Condidat", condidat);

import Condidat from "@/models/Condidat";
import connectDB from "@/utils/connectDB";
import nc from "next-connect";

connectDB();

const handler = nc()
  .post(async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      country,
      state,
      category,
      poids,
      age,
      club,
    } = req.body;
    try {
      const newCondidat = new Condidat({
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
        state,
        category,
        poids,
        age,
        club,
      });
      await newCondidat.save();
      res
        .status(200)
        .json({ status: "Condidat has been added Successfully !" });
    } catch (error) {
      res.status(400).json({ status: "Error somthing went wrong !" });
      console.log(error);
    }
  })
  .get(async (req, res) => {
    try {
      const condidats = await Condidat.find({});
      res.send(condidats);
    } catch (error) {
      res.status(400).json({ status: "Error somthing went wrong !" });
      console.log(error);
    }
  });
export default handler;

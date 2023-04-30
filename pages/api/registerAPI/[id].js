import Condidat from "@/models/Condidat";
import connectDB from "@/utils/connectDB";
import nc from "next-connect";

connectDB();

const handler = nc()
  .get(async (req, res) => {
    try {
      const condidat = await Condidat.findOne({ _id: req.query.id });
      res.send(condidat);
    } catch (error) {
      res.status(400).json({ status: "Error somthing went wrong !" });
      console.log(error);
    }
  })
  .put(async (req, res) => {
    try {
      const condidat = await Condidat.findOne({ _id: req.query.id });
      condidat.firstName = req.body.firstName;
      condidat.lastName = req.body.lastName;

      await condidat.save();

      res.send("Condidat has been updated Successfully !");
    } catch (error) {
      res.status(400).json({ status: "Error somthing went wrong !" });
      console.log(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const condidat = await Condidat.findOneAndDelete({ _id: req.query.id });

      res.send("Condidat has been deleted Successfully !");
    } catch (error) {
      res.status(400).json({ status: "Error somthing went wrong !" });
      console.log(error);
    }
  });

export default handler;

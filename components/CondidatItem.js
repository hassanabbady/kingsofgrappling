import domain from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";

export default function CondidatItem({ condidat }) {
  const router = useRouter();

  async function deleteCondidat() {
    try {
      await axios.delete(`${domain}/registerAPI/${condidat._id}`);
      alert("Condidat deleted successfully");
      router.push("/register/all");
    } catch (error) {
      res.status(400).json({ status: "Error somthing went wrong !" });
      console.log(error);
    }
  }

  return (
    <>
      <br></br>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card">
              <img
                src={condidat.club}
                className="card-img-top"
                alt={condidat.clubs}
              />
              <div className="card-body">
                <h5 className="card-title">{condidat.firstName}</h5>
                <p className="card-text"> {condidat.lastName} </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    router.push(`/register/${condidat._id}`);
                  }}>
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteCondidat(condidat._id);
                  }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <br />
    </>
  );
}

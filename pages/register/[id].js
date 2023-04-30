import axios from "axios";
import { useRouter } from "next/router";
import domain from "@/utils/config";
import { useState } from "react";

export default function CondidatID({ condidat }) {
  const router = useRouter();

  const [firstName, setfirstName] = useState(condidat.firstName);
  const [lastName, setlastName] = useState(condidat.lastName);

  async function updateCondidat() {
    const condidatUpdate = {
      firstName,
      lastName,
    };
    try {
      await axios.put(`${domain}/registerAPI/${condidat._id}`, condidatUpdate);
      alert("Condidat updated successfully");
      router.push("/register/all");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  return (
    <>
      <h1>Update Condidat </h1>
      <div className="container">
        <div className="mb-3 row">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              placeholder="firstName"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              placeholder="lastName"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="offset-sm-4 col-sm-8">
            <button className="btn btn-primary" onClick={updateCondidat}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(`${domain}/registerAPI/${context.query.id}`);
  return {
    props: {
      condidat: response.data,
    }, // will be passed to the page component as props
  };
}

import domain from "@/utils/config";
import axios from "axios";
import { useState } from "react";

export default function IndexRegister() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [category, setcategory] = useState("BEGINNER");

  const [poids, setpoids] = useState("-60kg");
  const [age, setage] = useState("");
  const [club, setclub] = useState("");

  async function addCondidat() {
    const condidat = {
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
    };
    console.log(condidat);
    try {
      await axios.post(`${domain}/registerAPI`, condidat);
      alert("Condidat added successfully");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <main>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/slide1.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/slide2.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/slide3.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container marketing">
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="../img/LOGO.jpg"
              alt=""
              width="250"
              height="250"
            />
            <h2>Registration for Kings of Grappling competition</h2>
            <p className="lead">You can only register once.</p>
          </div>

          <div className="row g-5 justify-content-center">
            <div className="col-md-7 col-lg-8"></div>

            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder=""
                  value={lastName}
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">
                  Email <span className="text-muted"></span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              </div>
              <div className="col-12">
                <label className="form-label">
                  Phone: <span className="text-muted"></span>
                </label>
                <input
                  type="Phone"
                  className="form-control"
                  name="phone"
                  placeholder="+212000000000"
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid Phone
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="1234 Main St"
                  value={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your address.
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  placeholder="country"
                  value={country}
                  onChange={(e) => {
                    setcountry(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="state"
                  value={state}
                  onChange={(e) => {
                    setstate(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select
                  value={category}
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                  className="form-select"
                  name="category">
                  <option value="BEGINNER">BEGINNER</option>
                  <option value="INTERMEDIATE">INTERMEDIATE</option>
                  <option value="ADVANCED">ADVANCED</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid Category.
                </div>
              </div>

              <div className="col-md-3">
                <label className="form-label">Weight (in kg):</label>
                <select
                  className="form-select"
                  name="poids"
                  value={poids}
                  onChange={(e) => {
                    setpoids(e.target.value);
                  }}
                  required>
                  <option value="-60kg">-60kg</option>
                  <option value="-65kg">-65kg</option>
                  <option value="-70kg">-70kg</option>
                  <option value="-75kg">-75kg</option>
                  <option value="-80kg">-80kg</option>
                  <option value="-85kg">-85kg</option>
                  <option value="-90kg">-90kg</option>
                  <option value="+90kg">+90kg</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid Weight.
                </div>
              </div>
              <div className="col-md-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  placeholder="age"
                  value={age}
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Club</label>
                <input
                  type="text"
                  className="form-control"
                  name="club"
                  placeholder="Club"
                  value={club}
                  onChange={(e) => {
                    setclub(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">Please enter your club.</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="mb-3 row">
              <div className="my-4">
                <button
                  className="w-100 btn btn-dark btn-lg"
                  onClick={addCondidat}>
                  Submit registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

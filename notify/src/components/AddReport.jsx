import React, { useEffect, useState } from "react";
// import "../pages/home/Home.css";
import "./AddReport.css"
import MapCompose from "./MapCompose";
import fire from "../images/fire.png";
import flood from "../images/flood.png";
import landslide from "../images/landslide.png";
import poweroutage from "../images/poweroutage.png";
import thunderstorm from "../images/thunderstorm.png";
import validator from "validator";
import Swal from "sweetalert2";
import axios from "axios";
function AddReport({ openReport, setOpenReport, getDataById }) {
  const type = [
    { label: "Please Select", value: "" },
    { label: "fire", value: fire },
    { label: "flood", value: flood },
    { label: "landslide", value: landslide },
    { label: "poweroutage", value: poweroutage },
    { label: "thunderstorm", value: thunderstorm },
  ];
  const [data, setData] = useState({
    type: "",
    name: "",
    details: "",
    requiredResources: "",
    location: "",
    position: {
      lat: 14.0392343,
      lng: 100.6144769,
    },
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!validator.isLength(data.name, { min: 3, max: 50 })) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name must be between 3 and 50 characters!",
      });
      return;
    }
    if (validator.isEmpty(data.type)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a type!",
      });
      return;
    }
    if (!validator.isLength(data.details, { min: 3, max: 50 })) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Details must be between 3 and 50 characters!",
      });
      return;
    }
    if (!validator.isLength(data.requiredResources, { min: 3, max: 50 })) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Required resources must be between 3 and 50 characters!",
      });
      return;
    }
    if (!validator.isLength(data.location, { min: 3, max: 50 })) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Location must be between 3 and 50 characters!",
      });
      return;
    }
    if (validator.isEmpty(data.location)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enable location!",
      });
      return;
    }
    // Inside AddReport component's function that handles the form submission
    try {
      const res = await axios.post("http://localhost:3001/api/markers", data, {
        withCredentials: true,
      });
      // Call the passed-in getDataById function with the id
      getDataById(res.data.id); // Assuming that the server responds with an object that has an `id` property
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setData((prevData) => ({
        ...prevData,
        position: { lat: latitude, lng: longitude },
      }));
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }, []);

  return (
    <div className="home-body-right">
      <div className="show-report-box">
        {/* container */}
        <div className="show-report-container">
          {/* head */}
          <div className="show-report-head">
              <h1>Report an accident</h1>
          </div>

          {/* form */}
          <form onSubmit={handleClick}>
          <div className="show-detail-body">
            <div className="show-report-body-title">Disaster Name</div>
            <input
              className="show-report-body-input"
              name="name"
              onChange={handleChange}
            ></input>
            <div className="show-report-body-title">Disaster type</div>
            <label>
              <select className="show-detail-disaster-select" name="type" value={data.type} onChange={handleChange}>
                {type.map((type) => (
                  <option
                    name="type"
                    value={type.value}
                    onChange={handleChange}
                  >
                    {type.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="show-report-body-title">Details</div>
            <input
              className="show-report-body-input"
              name="details"
              onChange={handleChange}
            ></input>
            <div className="show-report-body-title">Required resources</div>
            <input
              className="show-report-body-input"
              name="requiredResources"
              onChange={handleChange}
            ></input>
            <div className="show-report-body-title">Location</div>
            <input
              className="show-report-body-input"
              name="location"
              onChange={handleChange}
            ></input>
            <div className="show-report-body-title">Coordinate</div>
            <input
              type="coordinate"
              value={data.position.lat + "," + data.position.lng}
              className="show-report-body-input"
              name="coordinate"
              onChange={handleChange}
            ></input>
            <br />
            <button className="show-report-body-button">Report</button>
          </div>
        </form>
        </div>
    
      </div>
    </div>
  );
}

export default AddReport;

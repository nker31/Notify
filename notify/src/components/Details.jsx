import React, { useEffect, useState } from "react";
import "../pages/home/Home.css";
import MapCompose from "./MapCompose";
import fire from "../images/fire.png";
import flood from "../images/flood.png";
import landslide from "../images/landslide.png";
import poweroutage from "../images/poweroutage.png";
import thunderstorm from "../images/thunderstorm.png";

function Details({ handleClick, data }) {
  const [center, setCenter] = useState(data.position);
  function formatTimestamp(timestampStr) {
    const date = new Date(timestampStr);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return date.toLocaleString("en-US", options).replace(/\//g, "-");
  }
  useEffect(() => {
    setCenter(data.position);
  }, [data]);
  return (
    <div className="home-body-right">
      <div className="show-detail-box">
        
        <div className="show-detail-head">
          <img src={data.type} className="show-detail-icon" />
          <div className="show-detail-head-title">
            <div className="title">Match head fire</div>
            <p className="sub-title">
              {formatTimestamp(data.markerTimeStamp)}| {data && data.username ? data.username : "Phoomtep Pitakamnuay"}

            </p>
          </div>
        </div>

        <div className="show-detail-body">
          <div className="show-detail-body-title">Details</div>
          <div className="show-detail-body-detail">{data.details}</div>
          <div className="show-detail-body-title">Required resources</div>
          <div className="show-detail-body-detail">
            {data.requiredResources}
          </div>
          <div className="show-detail-body-title">Location</div>
          <div className="show-detail-body-detail">{data.location}</div>
        </div>
        <div className="minimap-container">
          <div className="mini-map">
            <MapCompose
              key={JSON.stringify(data.position)} // ใช้ data.position เป็น key
              data={data}
              zoom={17}
              disableUI={true}
              handleClick={handleClick}
              markers={[data]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

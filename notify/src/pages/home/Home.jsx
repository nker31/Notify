import React, { useEffect, useState } from "react";
import "./Home.css";
import MapCompose from "../../components/MapCompose";
import fire from "../../images/fire.png";
import flood from "../../images/flood.png";
import landslide from "../../images/landslide.png";
import poweroutage from "../../images/poweroutage.png";
import thunderstorm from "../../images/thunderstorm.png";
import Navbar from "../../components/navbar";
import axios from "axios";

function Home() {
  const type = [fire, flood, landslide, poweroutage, thunderstorm];
  const [data, setData] = useState({
    type: fire,
    details: "",
    requiredResources: "",
    location: "",
    markerTimeStamp: "",
    position: {
      lat: 14.0392343,
      lng: 100.6144769,
    },
  });

  const [markers, setMarkers] = useState([]);
  const getMarkers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/markers");
      setMarkers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMarkers();
  }, []);
  const getDataById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/markers/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (id) => {
    getDataById(id);
  };

  const createMark = async () => {
    for (let i = 0; i < 10; i++) {
      try {

        const randomLat = 14.0392343 + (Math.random() - 0.5) * 0.15;
        const randomLng = 100.6144769 + (Math.random() - 0.5) * 0.15;

        await axios.post("http://localhost:3001/api/markers", {
          type:type[Math.floor(Math.random() * 5)],
          details: "test" + i,
          requiredResources: "tes" + (i * i - i) + "t",
          location: "tes" + i * i * i * 1.5 + "t",
          position: {
            lat: randomLat,
            lng: randomLng,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  function formatTimestamp(timestampStr) {
    const date = new Date(timestampStr);
    
    // กำหนดตัวเลือกสำหรับการจัดรูปแบบ
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    // แปลงเป็นรูปแบบท้องถิ่นและแทนที่เครื่องหมายทับ '/' ด้วย '/'
    return date.toLocaleString('en-US', options).replace(/\//g, '-');
  }
  

  return (
    <>
      <div className="home-page-container">
        <div className="home-body">
          <div className="home-body-left">
            <div className="map-container">
              <MapCompose
                lat={14.0392343}
                lng={100.6144769}
                zoom={16}
                disableUI={false}
                handleClick={handleClick}
                markers={markers}
              />

              <button className="report-button" onClick={createMark}>
                Report
              </button>
            </div>
          </div>

          <div className="home-body-right">
            <div className="show-detail-container">
              <div className="show-detail-head">
                <img src={data.type} className="show-detail-icon" />
                <div className="show-detail-head-title">
                  <div className="title">Match head fire</div>
                  <p className="sub-title">
                    {formatTimestamp(data.markerTimeStamp)}
                     | Phoomtep Pitakamnuay
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
                    lat={data.position.lat}
                    lng={data.position.lng}
                    zoom={14}
                    disableUI={true}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

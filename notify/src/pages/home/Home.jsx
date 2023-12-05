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
import Details from "../../components/Details";
import AddReport from "../../components/AddReport";


function Home() {
  const type = [fire, flood, landslide, poweroutage, thunderstorm];
  const [data, setData] = useState({
    type: fire,
    name: "",
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
  // const handleClick = (id) => {
  //   getDataById(id);
  // };

  const createMark = async () => {
    // const minLat = 5;
    // const maxLat = 20;
    // const minLng = 97;
    // const maxLng = 105;

    // for (let i = 0; i < 10; i++) {
    //   try {
    //     const lat = minLat + Math.random() * (maxLat - minLat);
    //     const lng = minLng + Math.random() * (maxLng - minLng);

    //     await axios.post("http://localhost:3001/api/markers", {
    //       type: type[Math.floor(Math.random() * 5)],
    //       details: "test" + i,
    //       requiredResources: "test",
    //       location: "testtype",
    //       position: {
    //         lat: lat,
    //         lng: lng,
    //       },
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  };
  const [openReport, setOpenReport] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleOpenReport = () => {
    setOpenReport(true);
    setShowDetails(false); // ปิด Details เมื่อแสดง Report
  };

  const handleClick = (id) => {
    getDataById(id);
    setShowDetails(true); // แสดง Details เมื่อมีการคลิก
    setOpenReport(false); // ปิด Report
  };
  return (
    <>
      <div className="home-page-container">
        <div className="home-body">
          <div className="home-body-left">
            <div className="map-container">
              <MapCompose
                data={data}
                zoom={12}
                disableUI={false}
                handleClick={handleClick}
                markers={markers}
              />

              <button className="report-button" onClick={handleOpenReport}>
                Report
              </button>
            </div>
          </div>
          {openReport && <AddReport openReport={openReport} setOpenReport={setOpenReport}/>}
          {showDetails && <Details data={data} handleClick={handleClick}/>}
          {/*<Details data={data} handleClick={handleClick}/>*/}
        </div>
      </div>
    </>
  );
}

export default Home;

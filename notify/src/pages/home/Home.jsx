import React from 'react'
import './Home.css'
import MapCompose from '../../components/MapCompose'
import fire from '../../images/fire.png'
import flood from '../../images/flood.png'
import landslide from '../../images/landslide.png'
import poweroutage from '../../images/poweroutage.png'
import thunderstorm from '../../images/thunderstorm.png'
import Navbar from '../../components/navbar'
function Home() {
  return (
    <>
    <Navbar />
    <div className='home-page-container'>
      <div className="home-body">

        <div className="home-body-left">

          <div className='map-container'>

            <MapCompose lat={14.0392343} lng={100.6144769} zoom={16} disableUI={false}/>

            <button className="report-button" onClick={() => alert("Report")}>
              Report
            </button>

          </div>

        </div>

        <div className="home-body-right">

          <div className="show-detail-container">
            <div className="show-detail-head">
              <img src={fire} className="show-detail-icon" />
              <div className="show-detail-head-title">
                <div className="title">Match head fire</div>
                <p className="sub-title">9:00 AM 27/10/2023 | Phoomtep Pitakamnuay</p>
              </div>
            </div>

            <div className="show-detail-body">
              <div className="show-detail-body-title">
                Details
              </div>
              <div className="show-detail-body-detail">
                I saw a severe fire on a matchstick.
              </div>
              <div className="show-detail-body-title">
                Required resources
              </div>
              <div className="show-detail-body-detail">
                20 fire trucks
              </div>
              <div className="show-detail-body-title">
                Location
              </div>
              <div className="show-detail-body-detail">
                9 95 หมู่5 ซอยรังสิตภิรมย์ คลองหนึ่ง Khlong Luang District, Pathum Thani 12120
              </div>
            </div>
            <div className="minimap-container">
              <div className="mini-map">

                <MapCompose lat={14.0392343} lng={100.6144769} zoom={18} disableUI={true} />

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
    
  )
}

export default Home
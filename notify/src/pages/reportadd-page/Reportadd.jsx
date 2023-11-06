import React from 'react'
import './Reportadd.css'
import MapCompose from '../../components/MapCompose'
import fire from '../../images/fire.png'
import flood from '../../images/flood.png'
import landslide from '../../images/landslide.png'
import poweroutage from '../../images/poweroutage.png'
import thunderstorm from '../../images/thunderstorm.png'

function Reportadd() {
    return (
        <div className='Reportadd-page-container'>
            <div className="Reportadd-body">

                <div className="Reportadd-body-left">

                    <div className='Reportadd-map-container'>

                        <MapCompose lat={13.7563} lng={100.5018} zoom={14} disableUI={false} />

                    </div>

                </div>

                <div className="Reportadd-body-right">

                    <div className="Reportadd-show-detail-container">
                        <div className="Reportadd-show-detail-head">
                            <div className="Reportadd-show-detail-head-title">
                                <div className="Reportadd-title">Report a problem</div>
                            </div>
                        </div>

                        <form>
                            <div className="form-group">
                                <input type="text" id="disaster-name" placeholder="Disaster name" />
                            </div>
                            <div className="form-group">
                                <select id="disaster-type">
                                    <option value="">Disaster type</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea id="details" placeholder="Details"></textarea>
                            </div>
                            <div className="form-group">
                                <textarea id="resources" placeholder="Required resources"></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reportadd
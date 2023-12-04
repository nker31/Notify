import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import fire from '../images/fire.png'

function MapCompose({ lat, lng, zoom, disableUI }) {
    const position = { lat, lng };

    const markers = [
        { lat: 14.0392343, lng: 100.6144769 },
        { lat: 14.0492343, lng: 100.6144769 },
        { lat: 14.0592343, lng: 100.6144769 },
        { lat: 14.0692343, lng: 100.6144769 },
        { lat: 14.0792343, lng: 100.6144769 },
    ]

    const marks = [
        { lat: 14.0392343, lng: 100.6144769 },
        { lat: 14.0492343, lng: 100.6144769 },
    ]
    return (
        <APIProvider apiKey="AIzaSyAYWRedRUK6_0ol2PkQN3SJWgRfaO4dBY8">
            <Map center={position} zoom={zoom} disableDefaultUI={disableUI} mapId={'b75c0b5de2f2fec7'}>
                {/* Add your map markers and other elements here */}
                {/* <Marker position={position} icon={{
                    url: fire,
                    scaledSize: { width: 40, height: 40 }
                }} onClick={() => alert("click!")} /> */}

                {marks.map((marker, index) => (
                    <Marker position={marker} icon={{
                        url: fire,
                        scaledSize: { width: 40, height: 40 }
                       }}
                    />
                ))}
                {markers.map((marker, index) => (
                    <Marker position={marker} icon={{
                        url: fire,
                        scaledSize: { width: 40, height: 40 }
                    }} onClick={() => alert("click!")}
                    />
                ))}

            </Map>
        </APIProvider>
    )
}
export default MapCompose;
import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function MapCompose() {
    const position = { lat: 13.7563, lng: 100.5018 };
    return (
        <APIProvider apiKey="AIzaSyAYWRedRUK6_0ol2PkQN3SJWgRfaO4dBY8">
            <Map center={position} zoom={10}>
                {/* Add your map markers and other elements here */}
            </Map>
        </APIProvider>
    )
}
export default MapCompose;
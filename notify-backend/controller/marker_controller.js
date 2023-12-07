import {markersModel} from '../models/markerModel.js'
import Jwt from "jsonwebtoken";

export const getData = (req, res) => {
    markersModel.find()
    .then(markers => res.json(markers))
    .catch(err => res.json(err))
}

export const postData = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) 
        return res.status(401).json("Not authenticated!");

    Jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        // "userInfo" is the payload of the JWT token which contains the username
        const username = userInfo.username;

        // Combine the req.body with the username
        const newMarkerData = {
            ...req.body,
            username: username // Add the username to the document
        };

        // Now, create the marker with the combined data
        markersModel.create(newMarkerData)
            .then(marker => {
                // Assuming "_id" is the field for the ID in your document
                res.status(200).json({ id: marker._id });
            })
            .catch(error => res.status(500).json({ error: 'Error creating the marker', details: error }));
    });
}


export const getDataById = (req, res) => {
    markersModel.findById(req.params.id)
    .then(markers => res.json(markers))
    .catch(err => res.json(err))
}
export const deleteData = (req, res) => {
    markersModel.deleteMany({location: req.params.id})
    .then(markers => res.json(markers))
    .catch(err => res.json(err))
}
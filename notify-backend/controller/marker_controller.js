import {markersModel} from '../models/markerModel.js'

export const getData = (req, res) => {
    markersModel.find()
    .then(markers => res.json(markers))
    .catch(err => res.json(err))
}

export const postData = (req, res) => {
    markersModel.create(req.body).then(markers => res.json(markers))
}

export const getDataById = (req, res) => {
    markersModel.findById(req.params.id)
    .then(markers => res.json(markers))
    .catch(err => res.json(err))
}
export const deleteData = (req, res) => {
    markersModel.deleteMany({})
    .then(markers => res.json(markers))
    .catch(err => res.json(err))
}
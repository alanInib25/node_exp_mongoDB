import model from "../models/index.js";
import { handleHttpError } from "../utils/handleMessages.js";
import { matchedData } from "express-validator";
const { Tracks } = model;

//get all tracks
export const getTracks = async (req, res) => {
  try {
    const tracks = await Tracks.find({});
    !tracks.length ? handleHttpError(res, "sin tracks") : res.json(tracks);
  } catch (error) {
    handleHttpError(res, error.message || "ERROR_GET_TRACKS");
  }
};

//get a track
export const getTrack = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const track = await Tracks.findById(id); //|| null;
    !track ? handleHttpError(res, `sin track id ${id}`) : res.json(track);
  } catch (error) {
    handleHttpError(res, error.message || "ERROR_GET_TRACK");
  }
};

//add a track
export const addTrack = async (req, res) => {
  try {
    const body = matchedData(req);
    await new Tracks(body).save();
    handleHttpError(res, "track guardado");
  } catch (error) {
    handleHttpError(res, error.message || "ERROR_ADD_TRACK");
  }
};

//update a rack
export const updateTrack = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    await Tracks.findByIdAndUpdate(id, body);
    handleHttpError(res, "track actualizado");
  } catch (error) {
    handleHttpError(res, error.message || "ERROR_UPDATE_TRACK");
  }
};

//delete a track
export const deleteTrack = async (req, res) => {
  try {
    const { id } = matchedData(req);
    await Tracks.findByIdAndRemove(id);
    handleHttpError(res, "track eliminado");
  } catch (error) {
    handleHttpError(res, error.message || "ERROR_DELETE_TRACK");
  }
};

//delete all track
export const deleteTracks = async (req, res) => {
  try {
    await Tracks.deleteMany();
    handleHttpError(res, "tracks eliminados");
  } catch (error) {
    handleHttpError(res, error.mesage || "ERROR_DELETE_TRACKS");
  }
};

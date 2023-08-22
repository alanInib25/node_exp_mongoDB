import models from "../models/index.js";
import { PUBLIC_URL } from "../utils/config.js";
const { Storage } = models;

export const getStorage = async (req, res) => {
  try {
    const storages = await Storage.find({});
    res.json(storages);
  } catch (error) {
    res.send({ eror: error.message });
  }
};

export const addStorage = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      url: `${PUBLIC_URL}/${file.filename}`,
      filename: file.filename,
    };
    await new Storage(fileData).save();
  } catch (error) {
    res.send({ error: error.message });
  }
};
